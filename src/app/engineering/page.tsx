import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Factory,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import engImg from "@/assets/engineering.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Beti Engineering",
  description:
    "Industrial water treatment, packaging and consumer brands including Beti Table Water.",
};

const services = [
  "Industrial water treatment and purification systems",
  "Packaging machinery and automation",
  "Construction services and site support",
  "Equipment supplies and procurement",
  "Consumer brand development and manufacturing",
  "Beti Table Water production and distribution",
];

const principles = [
  {
    Icon: Factory,
    title: "Built for production",
    text: "We support operations that need dependable equipment, stable output, and practical upkeep.",
  },
  {
    Icon: Gauge,
    title: "Measured performance",
    text: "Our engineering work aims for clarity around output, efficiency, and long-term serviceability.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality-led delivery",
    text: "We combine local insight with standards that keep results consistent and trustworthy.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={engImg}
              alt="Beti Engineering facility"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0a6db7]/92 via-[#0a6db7]/70 to-[#0a6db7]/18" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#064a7c]/78 via-[#064a7c]/30 to-transparent" />

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
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
                  Subsidiary · Engineering
                </p>
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <Image
                    src="/beti_logo_bright.png"
                    alt="Beti Logo Bright"
                    width={140}
                    height={70}
                    className="h-12 w-auto"
                  />
                  <span className="max-w-[10rem] text-xs leading-5 text-white/85">
                    Official engineering and table water brand mark.
                  </span>
                </div>
                <h1 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-[6.5rem]">
                  Beti Engineering Nig. Ltd
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-[1.35rem]">
                  The industrial arm of Beti Group, focused on safe drinking
                  water systems, packaging, and consumer goods for Nigerian
                  families and businesses.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:max-w-3xl sm:grid-cols-3">
              {principles.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/12">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-base font-semibold">{title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/82">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow text-[#0a6db7]">What we do</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Engineering that keeps operations steady.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                Beti Engineering develops practical systems for water,
                packaging, and consumer production. The emphasis is on
                reliability, maintainability, and standards that make day to day
                operations easier to trust.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fbfe] p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                Core capabilities
              </h3>
              <ul className="mt-6 space-y-4">
                {services.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0a6db7]" />
                    <span className="text-base leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-gap bg-[#f5f8fb]">
          <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow text-[#0a6db7]">Why it matters</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Good engineering should make work calmer, cleaner, and more
                dependable.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-base leading-8 text-slate-700 md:text-lg">
                We combine local experience with operational discipline so our
                systems can support production in a way that feels predictable,
                not fragile.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                That approach shows up in the details: simpler maintenance,
                clearer output, and products that meet the expectations of the
                families and businesses that use them.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a6db7] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#095f9f]"
              >
                Discuss a project
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
