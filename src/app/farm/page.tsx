import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CloudSun, Leaf, Truck } from "lucide-react";
import farmImg from "@/assets/farm.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Beti Farm",
  description:
    "Modern crop cultivation, livestock and farm-to-market produce supplying Nigerian households.",
};

const services = [
  "Large-scale crop cultivation such as cassava, maize, and vegetables",
  "Livestock farming and poultry production",
  "Farm-to-market supply chain management",
  "Sustainable farming practices and technology",
];

const principles = [
  {
    Icon: Leaf,
    title: "Sustainable methods",
    text: "We use farming approaches that support soil health, planning, and long-term productivity.",
  },
  {
    Icon: Truck,
    title: "Reliable movement",
    text: "Getting produce from field to market matters just as much as the harvest itself.",
  },
  {
    Icon: CloudSun,
    title: "Season-aware planning",
    text: "Our operations are designed to adapt to weather, timing, and supply realities.",
  },
];

export default function FarmPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={farmImg}
              alt="Beti Farm landscape"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0d6b3f]/92 via-[#0d6b3f]/72 to-[#0d6b3f]/18" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b3f28]/75 via-[#0b3f28]/28 to-transparent" />

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
                  Subsidiary · Agriculture
                </p>
                <h1 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-[6.5rem]">
                  Beti Farm Ltd
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-[1.35rem]">
                  Modern crop cultivation, livestock, and farm-to-market
                  produce supplying Nigerian households.
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
              <p className="eyebrow text-[#0d6b3f]">What we do</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Farming that keeps food moving and standards high.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                Beti Farm combines practical agricultural operations with a
                disciplined supply approach. The aim is reliable output,
                dependable delivery, and better support for the households and
                businesses that rely on it.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f4fbf7] p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                Core capabilities
              </h3>
              <ul className="mt-6 space-y-4">
                {services.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#0d6b3f]" />
                    <span className="text-base leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-gap bg-[#f7faf8]">
          <div className="container-x grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <figure className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)]">
              <div className="relative min-h-[28rem]">
                <Image
                  src="/poultry.jpg"
                  alt="Layers and eggs at the poultry farm"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b3f28]/55 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-700 shadow-sm">
                  Poultry unit
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
                  <div className="hidden max-w-sm rounded-[1.75rem] bg-white/88 p-4 shadow-sm backdrop-blur md:block">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Layers & eggs
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Poultry operations designed to support dependable egg
                      production.
                    </p>
                  </div>
                </div>
              </div>
              <figcaption className="border-t border-slate-200 px-6 py-4 text-sm text-slate-600">
                Poultry and farm output are treated as part of the same supply
                system.
              </figcaption>
            </figure>

            <div className="space-y-4">
              <p className="eyebrow text-[#0d6b3f]">Why it matters</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Good farming should be reliable, scalable, and useful.
              </h2>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
                <p className="text-base leading-8 text-slate-700 md:text-lg">
                  We focus on operations that can deliver consistently through
                  the seasons, with a clear path from field to market.
                </p>
                <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                  That means practical planning, strong supply discipline, and
                  farming methods that are designed to support long-term
                  productivity rather than short-term noise.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d6b3f] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0b5f37]"
                >
                  Discuss supply
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
