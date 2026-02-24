import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { z } from 'zod';
import { isWithinInterval, isBefore, isAfter, addDays, parseISO } from 'date-fns';

const dateStringSchema = z.preprocess((arg) => {
    if (arg instanceof Date) {
        return arg.toISOString().split('T')[0];
    }
    return arg;
}, z.string());

const programSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    category: z.enum(['mentorship', 'grant', 'fellowship', 'hackathon', 'internship']),
    tags: z.array(z.string()),
    eligibility: z.object({
        type: z.enum(['students', 'open', 'professionals']),
        regions: z.string(),
    }),
    stipend: z.object({
        available: z.boolean(),
        amount_text: z.string().optional(),
        min_usd: z.number().optional(),
        max_usd: z.number().optional(),
    }),
    remote: z.boolean(),
    links: z.object({
        official: z.string().url(),
        apply: z.string().url(),
    }),
    dates: z.array(z.object({
        year: z.number(),
        applications_open: dateStringSchema, // YYYY-MM-DD
        applications_close: dateStringSchema, // YYYY-MM-DD
        program_start: dateStringSchema, // YYYY-MM-DD
        program_end: dateStringSchema, // YYYY-MM-DD
        notes: z.string().optional()
    })),
    notes: z.string().optional()
});

export type Program = z.infer<typeof programSchema>;

export type ProgramStatus = 'open' | 'opening_soon' | 'closed' | 'upcoming';

export interface ComputedProgram extends Program {
    status: ProgramStatus;
    currentYearDates?: Program['dates'][0];
}

const programsDirectory = path.join(process.cwd(), 'data', 'programs');

function computeStatus(dates: Program['dates']): { status: ProgramStatus, currentYearDates?: Program['dates'][0] } {
    const today = new Date();
    const currentYear = today.getUTCFullYear();

    // Find dates for the current year, or the most relevant upcoming one
    const currentYearDates = dates.find(d => d.year === currentYear) || dates.sort((a, b) => b.year - a.year)[0];

    if (!currentYearDates) {
        return { status: 'upcoming', currentYearDates: undefined };
    }

    const openDate = parseISO(currentYearDates.applications_open);
    const closeDate = parseISO(currentYearDates.applications_close);
    const thirtyDaysFromNow = addDays(today, 30);

    if (isWithinInterval(today, { start: openDate, end: closeDate })) {
        return { status: 'open', currentYearDates };
    } else if (isBefore(today, openDate) && isAfter(thirtyDaysFromNow, openDate)) {
        return { status: 'opening_soon', currentYearDates };
    } else if (isAfter(today, closeDate)) {
        return { status: 'closed', currentYearDates };
    } else {
        return { status: 'upcoming', currentYearDates };
    }
}

export function getPrograms(): ComputedProgram[] {
    if (!fs.existsSync(programsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(programsDirectory);
    const allProgramsData = fileNames
        .filter((fileName) => fileName.endsWith('.yaml') || fileName.endsWith('.yml'))
        .map((fileName) => {
            const fullPath = path.join(programsDirectory, fileName);
            
            try {
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const parsedYaml = yaml.load(fileContents);
                const program = programSchema.parse(parsedYaml);
                const { status, currentYearDates } = computeStatus(program.dates);
                
                return {
                    ...program,
                    status,
                    currentYearDates
                } as ComputedProgram;
            } catch (e) {
                // ANSI escape codes for terminal coloring
                const RESET = '\x1b[0m';
                const BOLD = '\x1b[1m';
                const RED = '\x1b[31m';
                const YELLOW = '\x1b[33m';
                const GRAY = '\x1b[90m';

                if (e instanceof z.ZodError) {
                    const zodError = e as z.ZodError<any>;
                    
                    const header = `${RED}${BOLD}⨯ Validation failed for ${fileName}${RESET}`;
                    const border = `${GRAY}----------------------------------------${RESET}`;
                    
                    const validationErrors = zodError.issues.map((err: any) => {
                        const pathString = err.path.join('.');
                        const formattedPath = pathString ? `${YELLOW}${pathString}${RESET}` : `${GRAY}(root)${RESET}`;
                        // Add spacing so messages align nicely
                        return `  ${formattedPath.padEnd(30 + YELLOW.length + RESET.length)} ${err.message}`;
                    }).join('\n');
                    
                    throw new Error(`\n\n${border}\n${header}\n${border}\n${validationErrors}\n${border}\n`);
                }
                
                const header = `${RED}${BOLD}⨯ Failed to parse ${fileName}${RESET}`;
                const errorMsg = e instanceof Error ? e.message : String(e);
                throw new Error(`\n\n${header}\n${GRAY}${errorMsg}${RESET}\n`);
            }
        });

    return allProgramsData;
}

export function getProgramBySlug(slug: string): ComputedProgram | undefined {
    const programs = getPrograms();
    return programs.find((program) => program.slug === slug);
}
