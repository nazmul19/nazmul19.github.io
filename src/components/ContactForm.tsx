"use client";

import { FormEvent, useCallback, useState } from "react";
import { Button } from "@/components/Button";
import { SuccessToast } from "@/components/SuccessToast";
import { brand } from "@/content/brand";
import { buildContactMailto } from "@/lib/contact";
import { resolveFormspreeEndpoint } from "@/lib/formspree";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-md border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-2.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--accent)]";

const FORMSPREE_ENDPOINT = resolveFormspreeEndpoint();

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const closeToast = useCallback(() => setToastOpen(false), []);

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

    try {
      if (FORMSPREE_ENDPOINT) {
        const payload = new FormData();
        payload.set("name", fields.name);
        payload.set("company", fields.company);
        payload.set("email", fields.email);
        payload.set("phone", fields.phone);
        payload.set("message", fields.problem);
        payload.set("_replyto", fields.email);
        payload.set("_subject", "Project discussion from growstack.tech");

        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: payload,
          headers: {
            Accept: "application/json",
          },
        });

        const result = (await response.json().catch(() => null)) as {
          error?: string;
          errors?: Array<{ message?: string }>;
        } | null;

        if (!response.ok) {
          const detail =
            result?.error ||
            result?.errors?.map((item) => item.message).filter(Boolean).join(" ") ||
            `Formspree returned ${response.status}.`;
          throw new Error(detail);
        }

        form.reset();
        setStatus("success");
        setToastOpen(true);
        return;
      }

      window.location.href = buildContactMailto(fields);
      setStatus("success");
      setToastOpen(true);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try WhatsApp or email instead.",
      );
    }
  }

  if (status === "success" && FORMSPREE_ENDPOINT) {
    return (
      <>
        <div className="rounded-2xl border border-[color:var(--accent)]/35 bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(255,255,255,0.9))] p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.14em] text-[color:var(--accent)] uppercase">
            Received
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl text-[color:var(--ink)]">
            We&apos;ll get back to you
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Thanks for reaching out to GrowStack. We&apos;ve received your project details and
            will follow up shortly.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="mt-6"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
        </div>
        <SuccessToast
          open={toastOpen}
          message="We'll get back to you shortly."
          onClose={closeToast}
        />
      </>
    );
  }

  return (
    <>
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

        {status === "error" ? (
          <p className="text-sm text-red-700" role="alert">
            {error} You can also reach us at {brand.email} or {brand.phoneDisplay}.
          </p>
        ) : null}
      </form>

      <SuccessToast
        open={toastOpen}
        message="We'll get back to you shortly."
        onClose={closeToast}
      />
    </>
  );
}
