import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm text-center space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground mt-2">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
        </div>

        <Link
          href="/"
          className="w-full rounded-md bg-primary text-primary-foreground py-2 text-sm font-medium hover:opacity-90 transition text-center block"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}