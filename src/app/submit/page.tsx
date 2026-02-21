import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, GithubIcon, FileCodeIcon, FilePlus } from "lucide-react";
import Link from "next/link";

export default function SubmitPage() {
    const repoIssuesUrl = "https://github.com/yourusername/oss-opportunities/issues/new/choose";
    const repoTreeUrl = "https://github.com/yourusername/oss-opportunities/tree/main/data/programs";

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24 space-y-12">
            <div className="space-y-4 text-center">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
                    <FilePlus className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    Contribute to the Directory
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Help us keep open source opportunities accurate and up-to-date. This project belongs to the community.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <GithubIcon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>Open an Issue</CardTitle>
                        <CardDescription>
                            Best for non-technical users or if you just want to drop a link.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 text-sm text-muted-foreground space-y-2">
                        <p>Know of a program that isn't listed here? Or did you notice a deadline needs updating?</p>
                        <p>Simply use our GitHub Issue Template. Fill out whatever information you have, and a maintainer will format it and add it to the database.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <a href={repoIssuesUrl} target="_blank" rel="noopener noreferrer">
                                Submit an Issue <ExternalLinkIcon className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <FileCodeIcon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>Submit a Pull Request</CardTitle>
                        <CardDescription>
                            Best for developers who want to contribute directly to the YAML database.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 text-sm text-muted-foreground space-y-2">
                        <p>All program data lives in individual YAML files under <code>/data/programs/</code>.</p>
                        <p>You can fork the repository, copy an existing YAML file as a template, fill out the new program's data, and submit a PR. It will auto-deploy once merged.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                            <a href={repoTreeUrl} target="_blank" rel="noopener noreferrer">
                                View YAML Data Files <ExternalLinkIcon className="ml-2 w-4 h-4" />
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="text-center pt-8 border-t">
                <p className="text-muted-foreground text-sm">
                    Please read our <a href="https://github.com/yourusername/oss-opportunities/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Contributing Guidelines</a> before submitting a PR.
                </p>
            </div>
        </div>
    );
}
