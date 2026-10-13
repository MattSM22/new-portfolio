
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <nav className="w-full text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link href="/" aria-label="Home">
          {/* Substitua pelo seu SVG original */}
          <span className="font-display text-2xl font-bold">MSM</span>
        </Link>

        {/* LINKS DESKTOP */}
        <ul className="hidden items-center gap-6 text-gray-400 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* HIRE ME DESKTOP */}
        <Link
          href="#contact"
          className="hidden rounded-lg bg-purple-800 px-5 py-2.5 hover:bg-purple-700 md:block"
        >
          Hire me
        </Link>

        {/* HAMBURGUER */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MENU FULLSCREEN MOBILE */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-neutral-950 md:hidden"
        >
          {/* HEADER DO MENU */}
          <div className="flex h-20 shrink-0 items-center justify-between px-6">
            <span className="font-display text-2xl font-bold">MSM</span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* LINKS CENTRALIZADOS */}
          <div className="flex flex-1 flex-col items-center justify-center gap-8 overflow-y-auto py-8">
            <ul className="flex flex-col items-center gap-7">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-medium text-gray-300 transition-colors hover:text-purple-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-purple-800 px-8 py-3 font-medium hover:bg-purple-700"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
