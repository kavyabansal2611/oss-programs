"use client";

import { useEffect, useState } from "react";

export function HeroAnimation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />

            <svg
                viewBox="0 0 500 500"
                className="w-full h-full drop-shadow-xl"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" className="text-primary" />
                        <stop offset="100%" stopColor="currentColor" className="text-blue-500" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Orbit 1 */}
                <circle
                    cx="250" cy="250" r="200"
                    fill="none" stroke="url(#grad1)" strokeWidth="1"
                    strokeDasharray="4 12" className="opacity-30 animate-[spin_40s_linear_infinite]"
                    style={{ transformOrigin: "250px 250px" }}
                />

                {/* Orbit 2 */}
                <circle
                    cx="250" cy="250" r="140"
                    fill="none" stroke="url(#grad1)" strokeWidth="2"
                    strokeDasharray="8 8" className="opacity-40 animate-[spin_30s_linear_infinite_reverse]"
                    style={{ transformOrigin: "250px 250px" }}
                />

                {/* Orbit 3 */}
                <circle
                    cx="250" cy="250" r="80"
                    fill="none" stroke="url(#grad1)" strokeWidth="1"
                    className="opacity-50"
                />

                {/* Floating Nodes */}
                <g className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: "250px 250px" }}>
                    <circle cx="250" cy="50" r="8" fill="url(#grad1)" filter="url(#glow)" className="animate-pulse" />
                    <circle cx="50" cy="250" r="12" fill="url(#grad1)" filter="url(#glow)" className="animate-pulse delay-150" />
                    <circle cx="450" cy="250" r="6" fill="url(#grad1)" filter="url(#glow)" className="animate-pulse delay-300" />
                    <circle cx="250" cy="450" r="10" fill="url(#grad1)" filter="url(#glow)" className="animate-pulse delay-700" />
                </g>

                <g className="animate-[spin_30s_linear_infinite_reverse]" style={{ transformOrigin: "250px 250px" }}>
                    <circle cx="250" cy="110" r="6" fill="currentColor" className="text-blue-400" filter="url(#glow)" />
                    <circle cx="110" cy="250" r="8" fill="currentColor" className="text-blue-400" filter="url(#glow)" />
                    <circle cx="390" cy="250" r="5" fill="currentColor" className="text-blue-400" filter="url(#glow)" />
                    <circle cx="250" cy="390" r="7" fill="currentColor" className="text-blue-400" filter="url(#glow)" />
                </g>

                {/* Center Hub */}
                <circle cx="250" cy="250" r="30" fill="url(#grad1)" filter="url(#glow)" className="animate-pulse" />
                <circle cx="250" cy="250" r="15" fill="white" className="opacity-80" />

                {/* Connecting Lines */}
                <path
                    d="M 250 250 L 250 50 M 250 250 L 50 250 M 250 250 L 450 250 M 250 250 L 250 450"
                    stroke="url(#grad1)"
                    strokeWidth="1.5"
                    className="opacity-40 animate-[spin_40s_linear_infinite]"
                    style={{ transformOrigin: "250px 250px" }}
                />
                <path
                    d="M 250 250 L 250 110 M 250 250 L 110 250 M 250 250 L 390 250 M 250 250 L 250 390"
                    stroke="url(#grad1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-50 animate-[spin_30s_linear_infinite_reverse]"
                    style={{ transformOrigin: "250px 250px" }}
                />
            </svg>
        </div>
    );
}
