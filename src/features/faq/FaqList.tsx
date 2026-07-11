"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Search } from "lucide-react";

import { faqContent } from "@/constants";
import { cn, typography } from "@/lib";

import { FaqItem } from "./FaqItem";

/**
 * The FAQ list with a live filter — typing narrows the questions
 * (case-insensitive over question + answer) with animated entry/exit; a calm
 * empty state appears when nothing matches. The entries themselves remain
 * native <details> glass cards (keyboard/AT semantics untouched); only this
 * thin filter layer hydrates.
 */
export function FaqList() {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqContent.items;
    return faqContent.items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div>
      {/* Search — animated underline, celadon focus glow. */}
      <div className="group relative max-w-md">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 size-5 -translate-y-1/2 text-muted transition-colors duration-[var(--duration-normal)] group-focus-within:text-gold"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search questions…"
          aria-label="Search frequently asked questions"
          className="w-full border-0 border-b border-border bg-transparent py-3 pl-8 pr-2 text-body text-foreground placeholder:text-muted/70 focus:outline-none"
        />
        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-celadon via-champagne to-transparent transition-transform duration-[var(--duration-medium)] ease-out-quart group-focus-within:scale-x-100"
        />
      </div>

      <div className="mt-10 space-y-4">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((item) => (
            <m.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <FaqItem item={item} index={faqContent.items.indexOf(item)} />
            </m.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {visible.length === 0 ? (
            <m.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={cn(typography.body, "py-8 text-muted")}
            >
              No questions match &ldquo;{query.trim()}&rdquo; — try different words, or just{" "}
              <a href="/contact" className="hover-underline w-fit font-medium text-gold">
                ask us directly
              </a>
              .
            </m.p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
