import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import heroImg from "@/assets/group-hero.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Contact Beti Group",
  description:
    "Contact Beti Group for business inquiries, partnerships, and community engagement opportunities.",
};

const offices = [
  {
    label: "Head Office",
    lines: ["1 Mathias Obiofuma Street", "Asaba, Delta State, Nigeria"],
  },
  {
    label: "Warri Office",
    lines: [
      "DSC Shopping Plaza by Scrab Yard",
      "Ovwian-Wori, Delta State, Nigeria",
    ],
  },
];

const contacts = [
  {
    Icon: MapPin,
    label: "Visit",
    lines: ["For office visits and correspondence, use the addresses below."],
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: ["07031928216", "07068948825"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@betigroup.com"],
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={heroImg}
              alt="Beti Group office and operations"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0b1d36]/92 via-[#0b1d36]/68 to-[#f1b548]/10" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#081326]/74 via-[#081326]/24 to-transparent" />

          <div className="container-x flex min-h-[calc(100vh-92px)] flex-col justify-between py-16 md:py-20">
            <div className="max-w-4xl space-y-6 text-white">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Beti Group
              </Link>

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#f1b548]">
                  Contact
                </p>
                <h1 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-[6.5rem]">
                  Let&apos;s talk about partnership,
                  <br />
                  supply, or community work.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-[1.35rem]">
                  We welcome conversations with customers, collaborators, and
                  organizations that want to work with a company grounded in
                  practical delivery and long-term relationships.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:max-w-3xl sm:grid-cols-3">
              {contacts.map(({ Icon, label, lines }) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/12 bg-white/8 p-5 text-white backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-base font-semibold">{label}</h2>
                  </div>
                  <div className="mt-4 space-y-1 text-sm leading-7 text-white/82">
                    {lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow text-[#0b1d36]/70">Office locations</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Reach us at our head office in Asaba or our Warri office.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                For inquiries, partnerships, and operational questions, please
                contact the office that best matches your need, and we will
                route you to the right team.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f8f6f1] p-8 md:p-10">
              <div className="space-y-4">
                {offices.map((office) => (
                  <div
                    key={office.label}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
                      {office.label}
                    </h3>
                    <div className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-gap bg-[#f5f8fb]">
          <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow text-[#0b1d36]/70">What to expect</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Clear responses, practical next steps, and follow-through.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-base leading-8 text-slate-700 md:text-lg">
                If you reach out with a request, we will route it to the
                relevant part of the group and respond with the kind of
                clarity that helps decisions move forward.
              </p>
              <Link
                href="/engineering"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1d36] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#112c52]"
              >
                View subsidiaries
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
