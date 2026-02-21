import { getPrograms } from "@/lib/programs";
import { ProgramList } from "@/components/ProgramList";
import { ListChecks } from "lucide-react";

export default function ProgramsPage() {
    const programs = getPrograms();

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl flex items-center gap-3">
                    <ListChecks className="w-8 h-8 text-primary" />
                    All Programs
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                    Browse through all recorded programs, grants, fellowships, and hackathons.
                </p>
            </div>

            <ProgramList programs={programs} />
        </div>
    );
}
