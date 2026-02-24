"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FloatingThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        // <button
        //     onClick={() => setTheme(isDark ? "light" : "dark")}
        //     className="
        //         fixed bottom-6 right-6 z-50
        //         w-12 h-12 flex items-center justify-center
        //         rounded-full
        //         bg-neutral-200 dark:bg-neutral-800
        //         text-xl
        //         shadow-lg
        //         border border-neutral-300 dark:border-neutral-700
        //         transition-all duration-300
        //         hover:scale-110
        //         backdrop-blur-md
        //     "
        // >
        //     {isDark ? "☀️" : "🌙"}
        // </button>
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 flex items-center justify-center
        rounded-full
        bg-neutral-200/70 dark:bg-neutral-800/70
        backdrop-blur-md
        border border-neutral-300 dark:border-neutral-700
        shadow-lg
        transition-all duration-300
        hover:scale-110
        text-neutral-700 dark:text-neutral-200
    "
        >
            {isDark ? (
                // Sun Icon
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.19l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.81l1.591-1.591M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
                    />
                </svg>
            ) : (
                // Moon Icon
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9 9 0 1112.998 2.25 7.5 7.5 0 0021.75 15z"
                    />
                </svg>
            )}
        </button>
    );
}