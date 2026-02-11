"use client";

import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Top bar: logo + desktop nav + mobile button */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Logo / brand */}
        <a href="#hero" className="text-lg font-semibold tracking-tight text-slate-900">
          Sample Dental
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium text-slate-700">
            <li>
              <a href="#hero" className="hover:text-sky-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-sky-600">
                About
              </a>
            </li>
            <li>
              <a href="#proof" className="hover:text-sky-600">
                Why Trust Us?
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-sky-600">
                Services
              </a>
            </li>
            <li></li>
            <li>
              <a href="#team" className="hover:text-sky-600">
                Our Team
              </a>
            </li>
            <li>
            
              <a href="#faq" className="hover:text-sky-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button (hamburger) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle main navigation"
        >
          {/* 3-line icon that turns into an X when open */}
          <span className="relative block h-4 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-slate-800 transition-transform ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-0.5 bg-slate-800 transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 top-3 h-0.5 bg-slate-800 transition-transform ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <nav
          aria-label="Mobile main navigation"
          className="border-t border-slate-200 bg-white md:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-700">
            <li>
              <a
                href="#hero"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#proof"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                Why Trust Us?
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-1.5 hover:text-sky-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
