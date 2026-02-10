export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 py-10 text-slate-100 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 id="contact-heading" className="text-xl font-semibold">
          Contact
        </h2>
        <p className="mt-3 text-sm">
          Sample Dental Clinic, RS Puram, Coimbatore
        </p>
        <p className="mt-3 text-sm">
          Phone:{" "}
          <a href="tel:+919585822338" className="text-sky-300 underline">
            +91 95858 22338
          </a>
          <br />
          Email:{" "}
          <a
            href="mailto:clinic@example.com"
            className="text-sky-300 underline"
          >
            clinic@example.com
          </a>
        </p>
        <p className="mt-6 text-xs text-slate-400">
          © 2026 Sample Dental Clinic.
        </p>
      </div>
    </footer>
  );
}
