import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Group" },
  { href: "/engineering", label: "Engineering" },
  { href: "/farm", label: "Farm" },
  { href: "/foundation", label: "Foundation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[rgba(255,248,237,0.92)] backdrop-blur-md">
      <div className="container-x grid items-center gap-5 py-4 md:grid-cols-[auto_1fr_auto]">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/beti-group-logo.svg"
            alt="Beti Group"
            width={240}
            height={66}
            className="h-10 w-auto"
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

        <Link
          href="/contact"
          className="inline-flex justify-self-start items-center gap-2 rounded-full bg-[#0c2240] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#112c52] md:justify-self-end"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
