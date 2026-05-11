import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  HeartHandshake,
  School,
  Stethoscope,
} from "lucide-react";
import foundImg from "@/assets/foundation.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Ben & Tina Worldwide Foundation",
  description:
    "Education, healthcare and empowerment programs serving communities across the Niger Delta.",
};

const programs = [
  "Educational scholarships and school support programs",
  "Healthcare initiatives and medical outreach",
  "Skills training and entrepreneurship development",
  "Community infrastructure development",
];

const principles = [
  {
    Icon: School,
    title: "Education",
    text: "We support learning as one of the strongest ways to expand opportunity over time.",
  },
  {
    Icon: Stethoscope,
    title: "Healthcare",
    text: "We back outreach and support where practical help can make a real difference quickly.",
  },
  {
    Icon: HeartHandshake,
    title: "Empowerment",
    text: "We look for programs that strengthen local capability, not just short-term assistance.",
  },
];

export default function FoundationPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image
              src={foundImg}
              alt="Ben and Tina Worldwide Foundation community outreach"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#6a3fa0]/92 via-[#6a3fa0]/72 to-[#6a3fa0]/18" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#41215f]/75 via-[#41215f]/28 to-transparent" />

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
                  Subsidiary · Community
                </p>
                <h1 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl lg:text-[6.5rem]">
                  Ben & Tina Worldwide
                  <br />
                  Foundation
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/90 md:text-[1.35rem]">
                  Education, healthcare, and empowerment programs serving
                  communities across the Niger Delta.
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
              <p className="eyebrow text-[#6a3fa0]">What we do</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Giving back with structure, care, and consistency.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
                The foundation helps Beti Group support the communities that
                support its businesses. The work is practical, respectful, and
                focused on outcomes that matter to people on the ground.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-[#faf7fc] p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
                Core programs
              </h3>
              <ul className="mt-6 space-y-4">
                {programs.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#6a3fa0]" />
                    <span className="text-base leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-gap bg-[#f7f5fb]">
          <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow text-[#6a3fa0]">Why it matters</p>
              <h2 className="font-display text-5xl text-balance text-[#0b1d36] md:text-6xl lg:text-7xl">
                Community impact should feel steady, not performative.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10">
              <p className="text-base leading-8 text-slate-700 md:text-lg">
                We want the foundation’s work to be recognizable by its
                consistency, not by noise. That means clear programs, practical
                support, and a long view on how change actually lasts.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-700 md:text-lg">
                Whether the focus is education, health, or local empowerment,
                the goal is to strengthen the capacity of the communities we
                are part of.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6a3fa0] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5b348b]"
              >
                Start a partnership
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
