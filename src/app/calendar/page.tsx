import { getPrograms } from "@/lib/programs";
import { parseISO, getMonth, getYear } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

export default function CalendarPage() {
    const programs = getPrograms();
    const currentYear = new Date().getUTCFullYear();

    // Filter programs that have dates and group by category
    const yearPrograms = programs.filter(p => p.currentYearDates);
    const categories = Array.from(new Set(yearPrograms.map(p => p.category)));

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-12">
            <div className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl flex items-center gap-3">
                    <CalendarDays className="w-8 h-8 text-primary" />
                    {currentYear} Opportunity Calendar
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl">
                    A visual timeline of open source programs, grants, and internships for the year.
                    Plan your applications ahead of time.
                </p>
            </div>

            <div className="space-y-12">
                {categories.map(category => {
                    const catPrograms = yearPrograms.filter(p => p.category === category);
                    return (
                        <div key={category} className="space-y-6">
                            <h2 className="text-2xl font-bold capitalize border-b pb-2">{category}s</h2>

                            <div className="grid grid-cols-12 gap-2 text-sm text-center font-medium text-muted-foreground mb-4 hidden md:grid">
                                {months.map(m => (
                                    <div key={m} className="bg-muted py-2 rounded-md">{m}</div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                {catPrograms.map(program => {
                                    const dates = program.currentYearDates!;
                                    const openMonth = getMonth(parseISO(dates.applications_open));
                                    const closeMonth = getMonth(parseISO(dates.applications_close));

                                    // For CSS Grid, column line is 1-indexed. Month 0 (Jan) starts at line 1.
                                    const startCol = openMonth + 1;
                                    const endCol = closeMonth + 2; // +1 to convert to 1-index, +1 to span past the close month

                                    return (
                                        <div key={program.slug} className="relative hidden md:grid grid-cols-12 gap-2 group">
                                            {/* Background grid lines */}
                                            <div className="col-span-12 grid grid-cols-12 gap-2 absolute inset-0 -z-10 pointer-events-none">
                                                {months.map((_, i) => (
                                                    <div key={i} className="border-x border-border/40 h-full w-full"></div>
                                                ))}
                                            </div>

                                            <div
                                                className="bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-colors rounded-md p-3 text-sm flex items-center justify-between"
                                                style={{ gridColumn: `${startCol} / ${endCol}` }}
                                            >
                                                <div className="flex flex-col gap-1 w-full overflow-hidden">
                                                    <Link href={`/programs/${program.slug}`} className="font-semibold hover:underline truncate">
                                                        {program.name}
                                                    </Link>
                                                    {dates.year !== currentYear && (
                                                        <Badge variant="secondary" className="w-fit text-[10px] h-4 py-0 px-1 bg-muted/50 text-muted-foreground border-none">
                                                            Dates TBD
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Mobile Fallback List */}
                            <div className="md:hidden space-y-4">
                                {catPrograms.map(program => (
                                    <Link key={program.slug} href={`/programs/${program.slug}`} className="block block-link">
                                        <div className="rounded-lg border bg-card p-4 space-y-2 relative overflow-hidden">
                                            <div className="flex justify-between items-start">
                                                <div className="font-semibold text-lg">{program.name}</div>
                                                {program.currentYearDates?.year !== currentYear && (
                                                    <Badge variant="secondary" className="text-[10px]">Dates TBD</Badge>
                                                )}
                                            </div>
                                            <div className="text-sm text-muted-foreground flex justify-between">
                                                <span>Opens: {program.currentYearDates!.applications_open}</span>
                                                <span>Closes: {program.currentYearDates!.applications_close}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}
