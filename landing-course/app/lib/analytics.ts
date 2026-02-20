export type ClickEvent = {
  name: string;      // e.g., "dentist_phone_click"
  context?: string;  // extra info, e.g., "contact_section"
};

export function trackClick(event: ClickEvent) {
  // For now: just show something in the browser console so you can see it works.
  console.log("[trackClick]", event.name, event.context ?? "");
}
