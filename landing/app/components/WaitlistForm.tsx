"use client";

import { useState, useId } from "react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        setEmail("");
      } else if (res.status === 409) {
        setStatus("duplicate");
      } else {
        setStatus("error");
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <p className="font-serif text-2xl font-bold text-ink mb-2">
          You&apos;re on the list.
        </p>
        <p className="text-sm text-muted font-mono">
          We&apos;ll send one email when Niveau is ready — nothing else.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="
            flex-1 px-4 py-3 rounded-full
            bg-cream-dark border border-ink/12
            text-ink placeholder:text-muted/60
            font-mono text-sm
            focus:outline-none focus:ring-2 focus:ring-rust/30 focus:border-rust/40
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
          "
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="
            px-6 py-3 rounded-full
            bg-rust text-white
            font-medium text-sm
            hover:bg-rust-dark
            active:scale-[0.97]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors
            flex items-center justify-center gap-2
            whitespace-nowrap
          "
        >
          {status === "loading" ? (
            <>
              <Spinner />
              Saving…
            </>
          ) : (
            "Get early access"
          )}
        </button>
      </div>

      {status === "duplicate" && (
        <p className="mt-3 text-sm text-center font-mono text-muted">
          You&apos;re already on the list — we&apos;ll be in touch!
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-center font-mono text-rust/80">
          {errorMsg}
        </p>
      )}
    </form>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
