"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ContactIntro } from "@/app/components/ContactIntro";

export function AdvocateContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mreaejlq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
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
      className="bg-slate-50 py-12 sm:py-16 scroll-mt-16"
      aria-labelledby="advocate-contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <ContactIntro
          title="Schedule a confidential consultation"
          intro="Share a few details about your situation, and we’ll get in touch to outline your options, likely timelines, and next steps before you decide on any legal action."
          note="If your matter is urgent, call or WhatsApp us directly using the details below. Initial discussions focus on understanding your case, not pressuring you into a decision."
        />


        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Left: contact details */}
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">
                Advocate Name / Chambers
              </p>
              <p className="mt-1">RS Puram, Coimbatore</p>
            </div>

            <div>
              <p className="font-medium text-slate-900">Phone</p>
              <a
                href="tel:+919585822338"
                className="mt-1 inline-block text-sky-700 underline"
              >
                +91 95858 22338
              </a>
            </div>

            <div>
              <p className="font-medium text-slate-900">WhatsApp</p>
              <a
                href="https://wa.me/919585822338"
                className="mt-1 inline-block text-sky-700 underline"
              >
                Message on WhatsApp
              </a>
            </div>

            <div>
              <p className="font-medium text-slate-900">Email</p>
              <a
                href="mailto:advocate@example.com"
                className="mt-1 inline-block text-sky-700 underline"
              >
                advocate@example.com
              </a>
            </div>

            <div>
              <p className="font-medium text-slate-900">Location</p>
              <a
                href="https://maps.google.com"
                className="mt-1 inline-block text-sky-700 underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from Advocate site"
              />

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
                  htmlFor="matter"
                  className="block text-sm font-medium text-slate-900"
                >
                  Type of matter
                </label>
                <Input
                  id="matter"
                  name="matter"
                  type="text"
                  placeholder="Eg: Property, family, civil, contract..."
                  className="mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-900"
                >
                  Brief details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  placeholder="Share a short summary so we understand how to help."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>

              {status === "success" && (
                <p className="text-xs text-emerald-600">
                  Thanks, we’ve received your message. We’ll get back during office hours.
                </p>
              )}

              {status === "error" && (
                <p className="text-xs text-red-600">
                  Something went wrong while sending your message. Please try again, or use
                  the phone / WhatsApp details on the left.
                </p>
              )}

              {status === "idle" && (
                <p className="text-xs text-slate-600">
                  We’ll respond with possible next steps or a suggested time for a consultation.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
