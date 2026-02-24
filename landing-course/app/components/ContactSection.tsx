// app/components/ContactSection.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactIntro } from "@/app/components/ContactIntro";
import { trackClick } from "@/app/lib/analytics";
import type {
  ContactSectionContentConfig,
  ContactChannel,
} from "@/app/site-content-config";
import type { ContactSectionDesignConfig } from "@/app/site-design-config";

type ContactSectionProps = {
  content: ContactSectionContentConfig;
  design: ContactSectionDesignConfig;
};

export function ContactSection({ content, design }: ContactSectionProps) {
  const { title, intro, note, clinicName, locationLine, channels=[], form 
} = content;

  const sectionBgClass =
    design.background === "soft"
      ? "bg-slate-50"
      : design.background === "emphasis"
      ? "bg-slate-900"
      : "bg-white";

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch(form.formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        formElement.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className={`${sectionBgClass} py-12 sm:py-16 scroll-mt-16`}
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <ContactIntro
          title={title}
          intro={intro ?? ""}
          note={note}
        />

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Left: contact details */}
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              {clinicName && (
                <p className="font-semibold text-slate-900">
                  {clinicName}
                </p>
              )}
              {locationLine && (
                <p className="mt-1">{locationLine}</p>
              )}
            </div>

            {channels.map((channel: ContactChannel) => {
              const commonLabel =
                channel.type === "phone"
                  ? "Phone"
                  : channel.type === "whatsapp"
                  ? "WhatsApp"
                  : channel.type === "email"
                  ? "Email"
                  : channel.type === "location"
                  ? "Location"
                  : channel.label;

              const displayValue =
                channel.type === "phone" || channel.type === "email"
                  ? channel.value
                  : channel.value;

              const onClick =
                channel.type === "phone"
                  ? () =>
                      trackClick({
                        name: "dentist_phone_click",
                        context: "contact_section",
                      })
                  : channel.type === "whatsapp"
                  ? () =>
                      trackClick({
                        name: "dentist_whatsapp_click",
                        context: "contact_section",
                      })
                  : undefined;

              return (
                <div key={channel.label}>
                  <p className="font-medium text-slate-900">
                    {commonLabel}
                  </p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="mt-1 inline-block text-sky-700 underline"
                      onClick={onClick}
                    >
                      {displayValue}
                    </a>
                  ) : (
                    <p className="mt-1">{displayValue}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: enquiry form with inline feedback */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Hidden subject */}
              {form.subject && (
                <input
                  type="hidden"
                  name="_subject"
                  value={form.subject}
                />
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-900"
                >
                  Your name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full name"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-900"
                >
                  Phone number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Mobile number"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Eg: Tooth pain, missing tooth, braces for child..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : form.submitLabel}
              </Button>

              {status === "success" && (
                <p className="text-xs text-emerald-600">
                  {form.successMessage}
                </p>
              )}

              {status === "error" && (
                <p className="text-xs text-red-600">
                  {form.errorMessage}
                </p>
              )}

              {status === "idle" && form.idleMessage && (
                <p className="text-xs text-slate-600">
                  {form.idleMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
