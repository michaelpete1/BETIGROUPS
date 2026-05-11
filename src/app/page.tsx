import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Droplets,
  HandHeart,
  Leaf,
  ShieldCheck,
  Sprout,
  Wrench,
} from "lucide-react";
import heroImg from "@/assets/group-hero.jpg";
import farmImg from "@/assets/farm.jpg";
import engImg from "@/assets/engineering.jpg";
import foundImg from "@/assets/foundation.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Beti Group",
  description:
    "Beti Group is a diversified Nigerian holding company spanning engineering, agriculture, and philanthropy.",
};

const subsidiaries = [
  {
    to: "/engineering",
    name: "Beti Engineering Nig. Ltd",
    tag: "Engineering & Manufacturing",
    blurb:
      "Industrial water treatment, packaging systems, and consumer brands including Beti Table Water.",
    image: engImg,
    Icon: Wrench,
    accent: "engineering",
  },
  {
    to: "/farm",
    name: "Beti Farm Ltd",
    tag: "Agriculture & Agro-allied",
    blurb:
      "Crop cultivation, livestock, and reliable farm-to-market supply for Nigerian households.",
    image: farmImg,
    Icon: Sprout,
    accent: "farm",
  },
  {
    to: "/foundation",
    name: "Ben & Tina Worldwide Foundation",
    tag: "Community & Philanthropy",
    blurb:
      "Scholarships, healthcare outreach, and local empowerment programs across the Niger Delta.",
    image: foundImg,
    Icon: HandHeart,
    accent: "foundation",
  },
] as const;

const principles = [
  {
    Icon: ShieldCheck,
    title: "Consistency",
    text: "Every business in the group is held to the same standard of execution and accountability.",
  },
  {
    Icon: Building2,
    title: "Enterprise",
    text: "We invest where practical business systems can create jobs, services, and durable value.",
  },
  {
    Icon: Leaf,
    title: "Community",
    text: "Growth matters most when it improves the lives of people around us and leaves room for more.",
  },
];

const stats = [
  { value: "03", label: "active subsidiaries" },
  { value: "01", label: "shared purpose" },
  { value: "100%", label: "Nigeria rooted" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={heroImg}
              alt="Beti Group landscape and operations"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0b1d36] via-[#0b1d36]/70 to-[#f1b548]/10" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#081326]/72 via-[#081326]/35 to-transparent" />

          <div className="container-x flex min-h-[calc(100vh-92px)] flex-col justify-between py-16 md:py-20">
            <div className="max-w-3xl space-y-6 text-white">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#f1b548]">
                Beti Group • Holdings
              </div>
              <div className="space-y-2">
                <h1 className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl md:text-8xl lg:text-[6.5rem]">
                  One group.
                  <br />
                  <span className="italic text-[#f1b548]">Many enterprises.</span>
                  <br />
                  Built in Nigeria.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/82 sm:text-lg md:text-[1.35rem]">
                  From farmland to factory floor, Beti Group brings together a
                  family of subsidiaries building products and services that
                  uplift Nigerian communities.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f1b548] px-6 py-3 text-sm font-semibold text-[#0b1d36] transition hover:-translate-y-0.5 hover:bg-[#f6c86a]"
                >
                  Learn about the group
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="grid gap-4 pt-12 sm:max-w-3xl sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/12 bg-white/8 p-5 text-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.65)] backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/68">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="eyebrow text-muted-foreground">
                  Our subsidiaries
                </p>
                <h2 className="font-display text-5xl text-balance md:text-6xl lg:text-7xl">
                  Built to operate independently.
                  <br />
                  Unified by one standard.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-8 text-muted-foreground md:text-lg">
                Each company has its own focus and operating rhythm, but every
                Beti business shares the same discipline around quality,
                reliability, and the communities it serves.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {subsidiaries.map(({ to, name, tag, blurb, image, Icon, accent }) => {
                const colorClass =
                  accent === "engineering"
                    ? "text-engineering"
                    : accent === "farm"
                      ? "text-farm"
                      : "text-foundation";
                const borderClass =
                  accent === "engineering"
                    ? "border-engineering/25"
                    : accent === "farm"
                      ? "border-farm/25"
                      : "border-foundation/25";
                const accentBg =
                  accent === "engineering"
                    ? "bg-engineering/12"
                    : accent === "farm"
                      ? "bg-farm/12"
                      : "bg-foundation/12";

                return (
                  <Link
                    key={to}
                    href={to}
                    className={`group overflow-hidden surface-card transition hover:-translate-y-1 hover:shadow-[0_28px_70px_-30px_rgba(15,23,42,0.38)] ${borderClass}`}
                  >
                    <div className="relative">
                      <Image
                        src={image}
                        alt={name}
                        width={800}
                        height={560}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${accentBg}`} />
                      <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/20 bg-slate-950/65 text-white backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="space-y-4 p-6">
                      <p className={`eyebrow ${colorClass}`}>{tag}</p>
                      <h3 className="font-display text-2xl text-balance">
                        {name}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {blurb}
                      </p>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        Visit the subsidiary
                        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-gap bg-[#f5f1e8]">
          <div className="container-x grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow text-[#0b1d36]/70">Our philosophy</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Different industries,
                <br />
                one operating mindset.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {principles.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.22)]"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0b1d36] text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap bg-white">
          <div className="container-x">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-5">
                <p className="eyebrow text-[#0b1d36]/70">
                  Built for long-term value
                </p>
                <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                  We build businesses that can grow with the people around
                  them.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                  Beti Group invests in sectors where steady execution creates
                  real value. The goal is simple: deliver useful work, keep
                  standards high, and build something people can rely on.
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-[#f8f6f1] p-8 md:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-3 border-b border-slate-200 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                    <div className="flex items-center gap-3">
                      <Droplets className="h-5 w-5 text-[#0b1d36]" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Reliable supply
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">
                      Products and services should arrive consistently, not
                      occasionally.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <HandHeart className="h-5 w-5 text-[#0b1d36]" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        Community first
                      </h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">
                      Growth should strengthen the communities that support it.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
                  {[
                    ["Practical", "Built around real operating needs"],
                    ["Measured", "Focused on results that can be tracked"],
                    ["Trusted", "Designed to be dependable over time"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
