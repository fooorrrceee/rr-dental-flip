// app/components/SiteFooter.tsx

import { siteConfig } from "@/app/site-config";

export function SiteFooter() {
  const { businessName, location, contact } = siteConfig;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {businessName}.{" "}
          {location.area ? `${location.area}, ` : null}
          {location.city}, {location.country}.
        </p>
        {contact.email ? (
          <p>
            Contact:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="font-medium text-slate-600 hover:text-slate-900"
            >
              {contact.email}
            </a>
          </p>
        ) : null}
      </div>
    </footer>
  );
}
