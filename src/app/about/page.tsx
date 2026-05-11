import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, Compass, Globe2, Users } from "lucide-react";
import heroImg from "@/assets/group-hero.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "About Beti Group",
  description:
    "Learn about Beti Group's mission, values, and commitment to building sustainable enterprises in Nigeria.",
};

const values = [
  {
    Icon: Award,
    title: "Quality",
    text: "We pursue a level of execution that is dependable, visible, and worth repeating.",
  },
  {
    Icon: Compass,
    title: "Integrity",
    text: "We aim to make decisions that can stand up to scrutiny from partners and communities alike.",
  },
  {
    Icon: Users,
    title: "Community",
    text: "We treat social impact as part of the business model, not an afterthought.",
  },
  {
    Icon: Globe2,
    title: "Growth",
    text: "We invest where local businesses can scale responsibly and create room for more opportunity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={heroImg}
              alt="Beti Group operations landscape"
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
                  About the group
                </p>
                <h1 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-[6.5rem]">
                  A Nigerian holding company
                  <br />
                  with a practical point of view.
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-[1.35rem]">
                  Beti Group brings together businesses in engineering,
                  agriculture, and philanthropy under one operating philosophy:
                  build things that matter, build them well, and keep them
                  useful to the people around us.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:max-w-3xl sm:grid-cols-3">
              {[
                ["Founded for", "Sustainable enterprise"],
                ["Primary base", "Delta State, Nigeria"],
                ["Group focus", "Useful products and services"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/12 bg-white/8 p-5 text-white backdrop-blur-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/68">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-gap bg-white">
          <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow text-[#0b1d36]/70">Our mission</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                To create enterprises that generate value and strengthen the
                communities they serve.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                The group is built to be durable, practical, and accountable.
                We want the businesses under Beti Group to be useful in daily
                life and meaningful in the long run.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#f8f6f1] p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                What guides us
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  ["Practical", "Built around clear operating needs"],
                  ["Transparent", "Focused on trust and accountability"],
                  ["Community-led", "Rooted in local relevance"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
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
        </section>

        <section className="section-gap bg-[#f5f1e8]">
          <div className="container-x grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.22)]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0b1d36] text-white">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
