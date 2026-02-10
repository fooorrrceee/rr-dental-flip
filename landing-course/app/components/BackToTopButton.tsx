"use client";

import { useEffect, useState } from "react";

export function BackToTopButton() {
  // isVisible: should the button be shown right now?
  const [isVisible, setIsVisible] = useState(false);

  // useEffect runs after this component mounts in the browser.
  useEffect(() => {
    const handleScroll = () => {
      // window.scrollY is how far we've scrolled down vertically in pixels.
      // When the user scrolls more than 300px, show the button.
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll listener when the component mounts.
    window.addEventListener("scroll", handleScroll);
    // Call once immediately in case the user reloads mid-page.
    handleScroll();

    // Cleanup: remove listener when component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array: run this effect only once on mount/unmount.

  // Function to scroll back to top or hero section.
  const scrollToTop = () => {
    // Try to scroll to the hero section if it exists.
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: scroll to very top of page.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // If button should not be visible, render nothing.
  if (!isVisible) {
    return null;
  }

  // The actual button UI.
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      aria-label="Back to top"
    >
      {/* Up arrow icon (simple for now) */}
      <span className="text-lg leading-none">↑</span>
    </button>
  );
}
