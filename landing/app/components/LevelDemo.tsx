"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const DEMO_TEXTS = [
  {
    level: "A2",
    title: "Ein berühmtes Museum in Berlin",
    cardBg: "bg-rust/[0.07]",
    barColor: "bg-rust",
    text: "In Berlin gibt es viele Museen. Das bekannteste ist das Pergamonmuseum. Es zeigt alte Kunst aus dem Nahen Osten. Jedes Jahr kommen viele Touristen. Das Museum ist sehr groß und interessant.",
  },
  {
    level: "B1",
    title: "Das Pergamonmuseum in Deutschland",
    cardBg: "bg-rust/[0.07]",
    barColor: "bg-ink/30",
    text: "Das Pergamonmuseum in Berlin gehört zu den meistbesuchten Museen Deutschlands. Es beherbergt bedeutende Sammlungen antiker Kunst aus dem Vorderen Orient, darunter den berühmten Pergamonaltar.",
  },
  {
    level: "B2",
    title: "Berlins Kulturerbe aus der Antike",
    cardBg: "bg-rust/[0.07]",
    barColor: "bg-ink/20",
    text: "Als eines der bedeutendsten archäologischen Museen weltweit präsentiert das Berliner Pergamonmuseum monumentale Architekturfragmente und Kunstwerke aus dem antiken Mesopotamien und der hellenistischen Welt.",
  },
];

const CYCLE_MS = 6000;

export default function LevelDemo() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hovering = useRef(false);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setActiveLevel(index);
      setProgressKey((k) => k + 1);
      setVisible(true);
    }, 160);
  }, []);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!hovering.current) {
        setActiveLevel((prev) => {
          const next = (prev + 1) % DEMO_TEXTS.length;
          setVisible(false);
          setTimeout(() => {
            setProgressKey((k) => k + 1);
            setVisible(true);
          }, 160);
          return next;
        });
      }
    }, CYCLE_MS);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  const handleTabClick = (index: number) => {
    goTo(index);
    startCycle();
  };

  const item = DEMO_TEXTS[activeLevel];

  return (
    <div className="w-full">
      {/* Demo card */}
      <div
        onMouseEnter={() => {
          hovering.current = true;
        }}
        onMouseLeave={() => {
          hovering.current = false;
        }}
        className={`rounded-xl border border-ink/10 pb-0 overflow-hidden transition-all duration-400 ${item.cardBg}`}
      >
        {/* Text area */}
        <div className="p-6 md:p-8">
          {/* Level tabs */}
          <div className="flex gap-2 mb-4">
            {DEMO_TEXTS.map((d, i) => (
              <button
                key={d.level}
                onClick={() => handleTabClick(i)}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-200 ${
                  i === activeLevel
                    ? "border-rust/40 text-rust bg-rust/10"
                    : "border-ink/10 text-muted hover:border-ink/25 hover:text-ink/60"
                }`}
              >
                {d.level}
              </button>
            ))}
          </div>
          <h3
            className="font-serif font-bold text-lg md:text-xl text-ink/90 leading-snug mb-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-5px)",
              transition: "opacity 200ms ease, transform 200ms ease",
            }}
          >
            {item.title}
          </h3>
          <p
            className="font-sans font-normal text-sm text-ink/70 leading-relaxed"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-5px)",
              transition: "opacity 200ms ease, transform 200ms ease",
            }}
          >
            {item.text}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-[2px] bg-ink/5 relative overflow-hidden">
          <div
            key={progressKey}
            className={`absolute inset-y-0 left-0 ${item.barColor}`}
            style={{
              animation: `levelProgress ${CYCLE_MS}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <p className="text-xs text-muted font-mono mt-3">
        Same topic. Three levels. Switch anytime.
      </p>
    </div>
  );
}
