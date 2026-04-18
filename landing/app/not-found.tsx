import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink flex items-center justify-center">
      <div className="text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-muted mb-4">404</p>
        <h1 className="text-3xl font-serif mb-4">Page not found</h1>
        <Link href="/" className="text-sm text-rust hover:underline">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
