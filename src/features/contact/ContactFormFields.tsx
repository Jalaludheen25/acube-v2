"use client";

import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Magnetic } from "@/components/motion";
import { Button } from "@/components/ui";
import { contact, contactContent, siteConfig } from "@/constants";
import { cn, typography } from "@/lib";
import { mailtoHref } from "@/utils";

import { contactSchema, type ContactFormValues } from "./contactSchema";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-body text-foreground transition-[border-color,box-shadow] duration-[var(--duration-normal)] ease-out-quart placeholder:text-muted focus:border-gold focus:shadow-glow-gold focus:outline-none aria-[invalid=true]:border-danger";

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

function Field({ id, label, registration, hint, error, type = "text", optional, textarea }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className={cn(typography.label, "text-muted")}>
        {label}
        {optional ? " (optional)" : ""}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-caption text-muted">
          {hint}
        </p>
      ) : null}
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={cn(inputClass, "resize-y")}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={inputClass}
          {...registration}
        />
      )}
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-caption text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The contact form (lazy-loaded, client-only). React Hook Form + shared Zod
 * schema; validates on blur and submit, focuses the first invalid field, and
 * posts to /api/contact. On success the form is replaced by a calm confirmation;
 * on failure, a quiet inline error offers the direct email as a fallback.
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
    return (
      <div role="status" aria-live="polite" className="border-t border-divider py-10">
        <p className={cn(typography.h3, "text-foreground")}>{contactContent.form.success.title}</p>
        <p className={cn(typography.body, "mt-3 max-w-md text-muted")}>
          {contactContent.form.success.body}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} noValidate className="flex flex-col gap-6">
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
