export default function AboutPage() {
    return (
        <main className="bg-slate-100 text-slate-900 min-h-screen px-6 py-16">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Header Card */}
                <div className="bg-white border border-slate-200 shadow-sm p-6 rounded-xl">
                    <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-600 rounded">
                        Platform Initiative
                    </span>

                    <h1 className="text-4xl font-bold mt-4 mb-2 text-slate-900">
                        OSS Program Discovery Platform
                    </h1>

                    <p className="text-slate-600 max-w-2xl">
                        A centralized platform that enables users to discover open source
                        programs, submit new opportunities, and collaboratively enhance
                        the ecosystem through community-driven contributions.
                    </p>

                    <div className="mt-5 flex gap-3">
                        <a href="/programs"
                            className="px-4 py-2 bg-yellow-500 text-black rounded-lg">
                            Browse Programs
                        </a>

                        <a href="https://github.com/OWASP-STUDENT-CHAPTER/oss-programs"
                            className="px-4 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-lg">
                            Contribute to Platform
                        </a>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* LEFT */}
                    <div className="md:col-span-2 space-y-8">

                        <section>
                            <h2 className="text-2xl font-semibold mb-2 text-slate-900">Overview</h2>
                            <p className="text-slate-600">
                                This platform is designed to aggregate and showcase
                                open source programs from various organizations,
                                allowing contributors to easily discover initiatives
                                aligned with their interests and skill sets.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                                What You Can Do Here
                            </h2>
                            <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                <li>Discover active OSS programs</li>
                                <li>Submit new program opportunities</li>
                                <li>Track platform updates</li>
                                <li>Improve the platform via contributions</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                                Why This Exists
                            </h2>
                            <p className="text-slate-600">
                                Open source opportunities are often scattered across
                                multiple platforms. This initiative aims to bring them
                                together into a unified discovery system, making
                                participation more accessible and structured.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                                Contribution Flow
                            </h2>
                            <p className="text-slate-600">
                                Users can submit new programs which are reviewed
                                and listed on the platform. Developers may also
                                contribute to the platform’s codebase by creating
                                feature branches and submitting pull requests.
                            </p>
                        </section>

                    </div>

                    {/* RIGHT PANEL */}
                    <div className="bg-white border border-slate-200 shadow-sm p-5 rounded-xl space-y-4">

                        <div>
                            <p className="text-sm text-slate-500">Maintained By</p>
                            <p className="text-slate-800">OWASP TIET Community</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">License</p>
                            <p className="text-slate-800">MIT</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Status</p>
                            <p className="text-green-600">Active Development</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Category</p>
                            <p className="text-slate-800">OSS Discovery</p>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Last Updated</p>
                            <p className="text-slate-800">Feb 2026</p>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}