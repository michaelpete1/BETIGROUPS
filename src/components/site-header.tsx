"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Group" },
  { href: "/engineering", label: "Engineering" },
  { href: "/farm", label: "Farm" },
  { href: "/foundation", label: "Foundation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[rgba(255,248,237,0.92)] backdrop-blur-md">
      <div className="container-x flex items-center justify-between gap-3 py-3 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4 md:py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/beti-group-logo.svg"
            alt="Beti Group"
            width={240}
            height={66}
            className="h-8 w-auto sm:h-9 md:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#0c2240] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#112c52] sm:inline-flex md:justify-self-end"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-[rgba(255,248,237,0.98)] md:hidden">
          <div className="container-x py-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0c2240] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#112c52]"
              onClick={() => setOpen(false)}
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
