"use client";

import { useState } from "react";

import { Button } from "@/components/ui";
import { navigatorContent, siteConfig } from "@/constants";
import { cn, typography } from "@/lib";

const chipBase =
  "cursor-pointer rounded-full border px-4 py-2 text-body-sm transition-colors duration-[var(--duration-normal)] ease-out-quart has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold";
const chipOn = "border-gold bg-gold/10 text-gold";
const chipOff = "border-border text-muted hover:border-foreground/30 hover:text-foreground";

/**
 * Setup Navigator — a guided intake that warms the path to a consultation. It
 * collects a little context (intent, location, timeline) to tailor the free
 * consultation; it never recommends a license/structure or quotes a price.
 * Selections are optional — the CTA is always available. Client Component
 * (local state only); accessible native radios styled as chips.
 */
export function SetupNavigator() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const select = (questionId: string, optionId: string) =>
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));

  const summary = navigatorContent.questions
    .map((question) => question.options.find((o) => o.id === answers[question.id])?.label)
    .filter((label): label is string => Boolean(label));

  return (
    <div>
      <p className={cn(typography.label, "flex items-center gap-3 text-gold")}>
        <span aria-hidden className="h-px w-8 bg-gold/60" />
        {navigatorContent.eyebrow}
      </p>
      <h2 className={cn(typography.h2, "mt-4 text-balance text-foreground")}>
        {navigatorContent.title}
      </h2>
      <p className={cn(typography.bodySmall, "mt-3 max-w-xl text-muted")}>
        {navigatorContent.lede}
      </p>

      <div className="mt-8 space-y-6">
        {navigatorContent.questions.map((question) => (
          <fieldset key={question.id}>
            <legend className={cn(typography.label, "text-muted")}>{question.legend}</legend>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={question.legend}>
              {question.options.map((option) => {
                const on = answers[question.id] === option.id;
                return (
                  <label key={option.id} className={cn(chipBase, on ? chipOn : chipOff)}>
                    <input
                      type="radio"
                      name={question.id}
                      value={option.id}
                      checked={on}
                      onChange={() => select(question.id, option.id)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {summary.length > 0 ? (
        <p role="status" className={cn(typography.bodySmall, "mt-8 text-muted")}>
          {navigatorContent.summaryLabel}:{" "}
          <span className="text-foreground">{summary.join(" · ")}</span>
        </p>
      ) : null}

      <Button href={navigatorContent.ctaHref} variant="primary" size="lg" className="mt-8">
        {siteConfig.cta.primary}
      </Button>
    </div>
  );
}
