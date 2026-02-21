"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { ComputedProgram } from "@/lib/programs";
import { Input } from "@/components/ui/input";
import { ProgramCard } from "./ProgramCard";
import { Search } from "lucide-react";

interface ProgramListProps {
    programs: ComputedProgram[];
}

export function ProgramList({ programs }: ProgramListProps) {
    const [query, setQuery] = useState("");

    const fuse = useMemo(() => {
        return new Fuse(programs, {
            keys: ["name", "description", "category", "tags", "slug"],
            threshold: 0.3,
        });
    }, [programs]);

    const filteredPrograms = useMemo(() => {
        if (!query) {
            const statusOrder = { open: 0, opening_soon: 1, upcoming: 2, closed: 3 };
            return [...programs].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
        }
        return fuse.search(query).map(result => result.item);
    }, [query, programs, fuse]);

    return (
        <div className="space-y-12">
            <div className="relative w-full md:max-w-xl mx-auto md:mx-0 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                    type="search"
                    placeholder="Search programs, tags, or categories…"
                    className="pl-12 h-12 md:h-14 text-base md:text-lg rounded-xl md:rounded-2xl border bg-card/50 glass focus-visible:ring-primary/20 transition-all focus-within:scale-[1.01]"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {filteredPrograms.length === 0 ? (
                <div className="py-24 text-center space-y-4 glass rounded-3xl border-dashed">
                    <p className="text-xl font-medium text-muted-foreground">No opportunities found matching "{query}"</p>
                    <button onClick={() => setQuery("")} className="text-primary font-semibold hover:underline">Clear search and show all</button>
                </div>
            ) : (
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPrograms.map((program, index) => (
                        <ProgramCard key={program.slug} program={program} index={index} />
                    ))}
                </div>
            )}
        </div>
    );
}
