import { getPrograms } from "@/lib/programs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const programs = getPrograms();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oss.owasptiet.com";
    if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_SITE_URL environment variable is not set');
    }

    const programUrls = programs.map((program) => ({
        url: `${baseUrl}/programs/${program.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/programs`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/calendar`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ];

    return [...staticUrls, ...programUrls];
}
