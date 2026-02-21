import { getPrograms } from "@/lib/programs";
import ical from "ical-generator";
import { parseISO, addHours } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
    const programs = getPrograms();
    const calendar = ical({ name: 'OSS Opportunities Deadlines' });

    programs.forEach(program => {
        if (!program.currentYearDates) return;

        const { applications_open, applications_close } = program.currentYearDates;

        // Add Applications Open Event
        calendar.createEvent({
            start: parseISO(applications_open),
            // Events without end are treated as point-in-time or all-day. Let's make it a 1-hour event for visibility, 
            // or "allDay: true"
            allDay: true,
            summary: `[Opens] ${program.name}`,
            description: `${program.name} applications are now open!\n\n${program.description}\n\nApply: ${program.links.apply}`,
            url: program.links.apply
        });

        // Add Applications Close Event
        calendar.createEvent({
            start: parseISO(applications_close),
            allDay: true,
            summary: `[Closes] ${program.name}`,
            description: `${program.name} applications close today!\n\n${program.description}\n\nApply: ${program.links.apply}`,
            url: program.links.apply
        });
    });

    return new NextResponse(calendar.toString(), {
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition': 'attachment; filename="calendar.ics"'
        }
    });
}
