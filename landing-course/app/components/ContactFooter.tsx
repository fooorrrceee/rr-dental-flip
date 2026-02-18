export function ContactFooter() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-sm">
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
        <p className="mt-6 text-xs text-slate-300">
          © 2026 Sample Dental Clinic.
        </p>
      </div>
    </footer>
  );
}
