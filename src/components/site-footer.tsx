import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Subsidiaries",
    links: [
      { href: "/engineering", label: "Beti Engineering Nig. Ltd" },
      { href: "/farm", label: "Beti Farm Ltd" },
      { href: "/foundation", label: "Ben & Tina Worldwide Foundation" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About the Group" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-[#f7f2e8]">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.35fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/beti-group-logo.svg"
                alt="Beti Group"
                width={240}
                height={66}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-sm text-base leading-8 text-slate-600">
              A diversified Nigerian holding company connecting engineering,
              agriculture, and community investment under one standard of care.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-4 text-base">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-600 transition hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
              Head Office
            </h2>
            <address className="mt-5 not-italic text-base leading-8 text-slate-600">
              1 Mathias Obiofuma Street
              <br />
              Asaba, Delta State, Nigeria
              <br />
              Warri Office: DSC Shopping Plaza by Scrab Yard, Ovwian-Wori,
              Delta State, Nigeria
              <br />
              Tel: 07031928216 · 07068948825
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Beti Group Holdings. All rights reserved.</p>
          <p>Built with care in Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
