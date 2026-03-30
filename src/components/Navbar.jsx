import { useState } from 'react';
import Container from './Container';

function Navbar({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold tracking-[0.16em] text-white uppercase">
          SB
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </Container>

      {open && (
        <Container className="pb-4 md:hidden">
          <nav className="panel flex flex-col gap-4 p-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      )}
    </header>
  );
}

export default Navbar;
