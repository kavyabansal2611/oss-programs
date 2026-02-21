import { getPrograms } from "@/lib/programs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProgramList } from "@/components/ProgramList";
import { Flame, CalendarClock, Globe, Rocket } from "lucide-react";
import { HeroAnimation } from "@/components/HeroAnimation";

export default function Home() {
  const programs = getPrograms();
  const openProgramsCount = programs.filter(p => p.status === 'open').length;
  const soonProgramsCount = programs.filter(p => p.status === 'opening_soon').length;

  return (
    <div className="container max-w-7xl mx-auto px-6 py-16 md:py-32 space-y-24">

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <section className="space-y-8 max-w-3xl animate-reveal">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Opportunities
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
            Launch your open source journey.
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground text-pretty leading-relaxed">
            The curated directory of paid programs, grants, and fellowships. Get compensated while building the future of the open internet.
          </p>

          <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                <span className="text-2xl md:text-3xl font-bold">{openProgramsCount}</span>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">Open Now</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <CalendarClock className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                <span className="text-2xl md:text-3xl font-bold">{soonProgramsCount}</span>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">Next 30 Days</span>
            </div>
            <div className="w-px h-10 bg-border hidden lg:block"></div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                <span className="text-2xl md:text-3xl font-bold">{programs.length}</span>
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground pt-1">Total Listed</span>
            </div>
          </div>
        </section>

        <div className="hidden md:flex justify-end items-center opacity-0 animate-reveal" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          <HeroAnimation />
        </div>
      </div>

      <section className="space-y-12 pb-20 pt-16 border-t">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Explore Opportunities</h2>
            <p className="text-muted-foreground text-lg">Filter by category, search by name, or browse below…</p>
          </div>
        </div>

        <ProgramList programs={programs} />
      </section>

    </div>
  );
}
