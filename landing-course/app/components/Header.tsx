export function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#" className="text-lg font-semibold">
          Sample Dental
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex gap-4 text-sm font-medium">
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
              <a href="#services" className="hover:text-sky-600">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
