
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm text-center space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            500 - Unexpected Error
          </h1>
          <p className="text-muted-foreground mt-2">
            Something went wrong on our end. Please try again or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="w-full rounded-md border py-2 text-sm font-medium hover:bg-muted transition text-center block"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}