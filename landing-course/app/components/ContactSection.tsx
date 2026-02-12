import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-12 sm:py-16 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          id="contact-heading"
          className="text-2xl font-semibold text-slate-900"
        >
          Book an appointment or ask a question
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Call, WhatsApp, or send a quick message and we’ll help you choose a convenient time to visit the clinic.
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Left: contact details */}
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold text-slate-900">
                Sample Dental Clinic
              </p>
              <p className="mt-1">
                RS Puram, Coimbatore
              </p>
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
                href="mailto:clinic@example.com"
                className="mt-1 inline-block text-sky-700 underline"
              >
                clinic@example.com
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

          {/* Right: simple enquiry form (template only for now) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <form className="space-y-4"
            action="https://formspree.io/f/mreaejlq" 
            method="POST">
              <input
                type="hidden"
                name="_subject"
                value="New enquiry from RS Puram dentist site"
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

              <Button type="submit" className="w-full">
                Send message
              </Button>

              <p className="text-xs text-slate-500">
                We’ll get back during clinic hours to confirm a time or answer your question.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
