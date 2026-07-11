"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Magnetic } from "@/components/motion";
import { Button } from "@/components/ui";
import { contact, contactContent, siteConfig } from "@/constants";
import { cn, typography } from "@/lib";
import { mailtoHref } from "@/utils";

import { contactSchema, type ContactFormValues } from "./contactSchema";

type Status = "idle" | "submitting" | "success" | "error";

/** `placeholder=" "` powers the floating label (`:placeholder-shown`). */
const inputClass =
  "peer w-full rounded-md border border-border bg-ink-black/40 px-4 pb-3 pt-6 text-body text-foreground transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-out-quart placeholder-transparent focus:border-gold focus:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-celadon)_45%,transparent),0_0_24px_-6px_color-mix(in_srgb,var(--color-celadon)_40%,transparent)] focus:outline-none aria-[invalid=true]:border-danger";

const labelClass =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body text-muted transition-all duration-[var(--duration-normal)] ease-out-quart peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-caption peer-focus:text-gold peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-caption motion-reduce:transition-none";

interface FieldProps {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  hint?: string;
  error?: string;
  type?: string;
  optional?: boolean;
  textarea?: boolean;
}

/** Floating-label field — the label rests inside the input and lifts to the
 *  top on focus or once filled. Hints stay wired via aria-describedby. */
function Field({ id, label, registration, hint, error, type = "text", optional, textarea }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
  const labelText = `${label}${optional ? " (optional)" : ""}`;

  return (
    <div>
      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            rows={5}
            placeholder=" "
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className={cn(inputClass, "resize-y", "[&:not(:placeholder-shown)]:pt-7")}
            {...registration}
          />
        ) : (
          <input
            id={id}
            type={type}
            placeholder=" "
            aria-invalid={error ? "true" : undefined}
            aria-describedby={describedBy}
            className={inputClass}
            {...registration}
          />
        )}
        <label htmlFor={id} className={cn(labelClass, textarea && "top-6 translate-y-0")}>
          {labelText}
        </label>
      </div>
      {hint ? (
        <p id={hintId} className="mt-1 text-caption text-muted">
          {hint}
        </p>
      ) : null}
      <AnimatePresence>
        {error ? (
          <m.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 text-caption text-danger"
          >
            {error}
          </m.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** Animated confirmation — a celadon circle + check drawn stroke-by-stroke. */
function SuccessState() {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-start gap-6 py-10">
      <m.svg
        viewBox="0 0 52 52"
        className="size-16"
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        <m.circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="var(--color-celadon)"
          strokeWidth="2"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        />
        <m.path
          d="M15 27 L23 34 L37 19"
          fill="none"
          stroke="var(--color-celadon)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5, ease: "easeOut" },
            },
          }}
        />
      </m.svg>
      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
      >
        <p className={cn(typography.h3, "text-foreground")}>{contactContent.form.success.title}</p>
        <p className={cn(typography.body, "mt-3 max-w-md text-muted")}>
          {contactContent.form.success.body}
        </p>
      </m.div>
    </div>
  );
}

/**
 * The contact form (lazy-loaded, client-only). React Hook Form + shared Zod
 * schema; validates on blur and submit, focuses the first invalid field, and
 * posts to /api/contact. Floating labels, celadon focus glow, animated
 * errors; success draws an animated check. On failure, a quiet inline error
 * offers the direct email as a fallback.
 */
export function ContactFormFields() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", phone: "", message: "", website: "" },
  });
  const [status, setStatus] = useState<Status>("idle");
  const fields = contactContent.form.fields;

  const onValid = async (values: ContactFormValues) => {
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const onInvalid = () => {
    const firstError = Object.keys(errors)[0] as keyof ContactFormValues | undefined;
    if (firstError) setFocus(firstError);
  };

  if (status === "success") {
    return <SuccessState />;
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} noValidate className="flex flex-col gap-5">
      {/* Honeypot — visually hidden, off keyboard/AT; bots fill it, humans don't. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
        {...register("website")}
      />

      <Field id="name" label={fields.name.label} registration={register("name")} error={errors.name?.message} />
      <Field
        id="email"
        type="email"
        label={fields.email.label}
        hint={fields.email.hint}
        registration={register("email")}
        error={errors.email?.message}
      />
      <Field
        id="phone"
        type="tel"
        label={fields.phone.label}
        hint={fields.phone.hint}
        optional
        registration={register("phone")}
        error={errors.phone?.message}
      />
      <Field
        id="message"
        textarea
        label={fields.message.label}
        hint={fields.message.hint}
        registration={register("message")}
        error={errors.message?.message}
      />

      {status === "error" ? (
        <p role="alert" className={cn(typography.bodySmall, "text-muted")}>
          {contactContent.form.error}{" "}
          <a href={mailtoHref(contact.email)} className="text-foreground underline">
            {contact.email}
          </a>
        </p>
      ) : null}

      <Magnetic className="self-start">
        <Button type="submit" variant="primary" size="lg">
          {status === "submitting" ? contactContent.form.sending : siteConfig.cta.primary}
        </Button>
      </Magnetic>
    </form>
  );
}
