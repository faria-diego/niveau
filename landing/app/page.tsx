import WaitlistForm from "./components/WaitlistForm";
import LevelDemo from "./components/LevelDemo";

const FEATURES = [
  {
    tag: "Levels",
    label: "One story, three levels",
    description:
      "Read the same news article at A2, B1, or B2. Bookmark it today, come back at a harder level next month — and actually see how far you've come.",
    visual: (
      <div className="flex gap-2 flex-wrap">
        {["A2", "B1", "B2"].map((level, i) => (
          <span
            key={level}
            className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
              i === 0
                ? "border-rust/40 text-rust bg-rust/8"
                : i === 1
                ? "border-ink/20 text-ink/50"
                : "border-ink/12 text-ink/30"
            }`}
          >
            {level}
          </span>
        ))}
      </div>
    ),
  },
  {
    tag: "Content",
    label: "Real news, not recycled fairy tales",
    description:
      "New topics every week — politics, culture, science, sport. Content that makes you curious enough to actually finish the article.",
    visual: (
      <div className="flex gap-2 items-center flex-wrap">
        {["Kultur", "Politik", "Sport","+9"].map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-muted border border-ink/10 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    tag: "Vocabulary",
    label: "Tap a word, own it forever",
    description:
      "Select any word while reading to see its translation and definition instantly. Save it with one tap — then review your personal word list as flashcards so what you read actually sticks.",
    visual: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-sans bg-rust/10 text-rust px-2 py-1 rounded border border-rust/20 cursor-default">
            beherbergt
          </span>
          <span className="text-xs font-mono text-muted">→ &ldquo;houses, contains&rdquo;</span>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Nav */}
      <nav className="border-b border-ink/8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-tight">Niveau</span>
          <a
            href="#signup"
            className="text-sm font-medium bg-rust text-white px-5 py-2 rounded-full hover:bg-rust-dark transition-colors active:scale-[0.97] cursor-pointer"
          >
            Get early access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 pb-0 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[55fr_45fr] gap-8 md:gap-16 items-start">
          {/* Left: headline */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-rust mb-8 animate-fade-slide animate-fade-slide-d0">
              Coming soon · German reading platform
            </p>
            <h1 className="text-[2.75rem] md:text-[4.25rem] font-serif font-extrabold leading-none tracking-tight mb-8 animate-fade-slide animate-fade-slide-d1">
              
              News and stories in German<br />
              <em className="text-rust not-italic italic">
                at your level
              </em>
            </h1>
            <p className="text-base md:text-lg text-ink/50 leading-relaxed max-w-sm animate-fade-slide animate-fade-slide-d2">
              The same article at A2, B1, and B2 — so you stop skipping news
              because it&apos;s too hard, and start actually reading.
            </p>
          </div>

          {/* Right: level demo + ghost "3" */}
          <div className="relative flex items-start md:pt-16 pb-16 animate-fade-slide animate-fade-slide-d3">
            <div className="relative z-10 w-full">
              <LevelDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {FEATURES.map((feature, i) => (
              <div key={feature.label} className="flex flex-col">
                <div className="h-[2px] w-full mb-6 bg-rust/50" />
                <p className="text-xs font-mono uppercase tracking-widest mb-6 text-rust">
                  {feature.tag}
                </p>
                <div className="mb-6">{feature.visual}</div>
                <h3 className="font-serif text-xl font-bold mb-3 text-ink/90">
                  {feature.label}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section
        id="signup"
        className="relative px-6 md:px-12 pt-16 pb-32 md:pt-20 md:pb-40 text-center overflow-hidden"
      >
        {/* Radial rust glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(214,59,34,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-rust mb-6">
            Early access
          </p>
          <h2 className="text-5xl md:text-7xl font-serif font-extrabold leading-none tracking-tight mb-6">
            Be first to read.
          </h2>
          <p className="text-ink/45 mb-12 leading-relaxed max-w-xs mx-auto">
            One email when it&apos;s ready. No newsletters, no spam.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/8 px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-serif text-2xl text-ink/70">Niveau</span>
          <p className="text-xs text-muted font-mono">
            Built by a German learner, for German learners.
          </p>
        </div>
      </footer>
    </div>
  );
}
