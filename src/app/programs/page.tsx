import { getPrograms } from "@/lib/programs";
import { ProgramList } from "@/components/ProgramList";
import { ListChecks } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "OSS Opportunities",
    description:
        "Browse open source programs including grants, fellowships, hackathons and internships. Discover OSS opportunities in one place.",

    openGraph: {
        title: "OSS Opportunities",
        description:
            "Explore open source opportunities such as GSoC, MLH Fellowship, Outreachy and more.",
        url: "https://oss.owasptiet.com/programs",
        siteName: "OSS Opportunities",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "OSS Opportunities",
        description:
            "Find and explore the best open source programs worldwide.",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },

    alternates: {
        canonical: "https://oss.owasptiet.com/programs",
    },
};

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