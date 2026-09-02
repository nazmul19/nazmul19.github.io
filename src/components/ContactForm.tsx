"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { brand } from "@/content/brand";
import { buildContactMailto } from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-md border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      problem: String(data.get("problem") || ""),
    };

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fields.name,
            company: fields.company,
            email: fields.email,
            phone: fields.phone,
            message: fields.problem,
            _subject: "Project discussion from growstack.tech",
          }),
        });

        if (!response.ok) {
          throw new Error("Unable to send your message right now.");
        }

        form.reset();
        setStatus("success");
        return;
      }

      window.location.href = buildContactMailto(fields);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try WhatsApp or email instead.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[color:var(--ink)]">
          Name
          <input className={inputClass} name="name" required autoComplete="name" />
        </label>
        <label className="block text-sm font-medium text-[color:var(--ink)]">
          Company Name
          <input className={inputClass} name="company" required autoComplete="organization" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[color:var(--ink)]">
          Email
          <input
            className={inputClass}
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </label>
        <label className="block text-sm font-medium text-[color:var(--ink)]">
          Phone Number
          <input className={inputClass} name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>

      <label className="block text-sm font-medium text-[color:var(--ink)]">
        What problem are you trying to solve?
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          name="problem"
          required
        />
      </label>

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Discuss Your Project"}
      </Button>

      {status === "success" ? (
        <p className="text-sm text-[color:var(--accent-strong)]" role="status">
          {process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
            ? "Thanks — we received your message and will get back to you soon."
            : "Opening your email client with the project details…"}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-red-700" role="alert">
          {error} You can also reach us at {brand.email} or {brand.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}
