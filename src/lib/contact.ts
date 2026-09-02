import { brand } from "@/content/brand";

export function whatsappUrl(message = brand.whatsappMessage): string {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telUrl(): string {
  return `tel:${brand.phoneTel}`;
}

export function mailtoUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${brand.email}${query ? `?${query}` : ""}`;
}

export function buildContactMailto(fields: {
  name: string;
  company: string;
  email: string;
  phone: string;
  problem: string;
}): string {
  const body = [
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    "",
    "Problem:",
    fields.problem,
  ].join("\n");

  return mailtoUrl("Project discussion from growstack.tech", body);
}
