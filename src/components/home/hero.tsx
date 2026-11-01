import Image from "next/image";
import { Container } from "@/components/shared/container";

const STATS = [
  { value: "১৩", label: "হাসপাতাল ও ডায়াগনস্টিক" },
  { value: "২০–৪০ মি.", label: "ওষুধ ডেলিভারি" },
  { value: "৩", label: "গাইড প্যাকেজ" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      {/* Background image: public/images/hero/hero-bg.jpg */}
      <Image
        src="/images/home/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Left gradient overlay */}
      <div
  aria-hidden
  className="absolute inset-y-0 left-0 -z-10 w-[1000px] max-w-full bg-gradient-to-r from-brand-900 via-brand-900/70 to-[rgba(15,34,51,0)] lg:w-[min(1200px,70%)]"
/>

      <Container className="flex min-h-[800px] items-center py-[72px]">
        <div className="flex w-full max-w-[696px] flex-col items-start gap-6">
          <span className="rounded-full bg-accent-100 px-[10px] py-[3px] text-xs leading-[18px] font-medium text-brand-900">
            রাজশাহীর জন্য
          </span>

          <h1 className="text-[36px] leading-[46px] font-bold text-white sm:text-[44px] sm:leading-[54px] lg:text-[56px] lg:leading-[67px]">
            রাজশাহীর সবচেয়ে সহজ স্বাস্থ্যসেবা
          </h1>

          <p className="text-base leading-7 text-brand-100 md:text-[20px] md:leading-[30px]">
            ভিডিও কলে ডাক্তার, হাসপাতালে সঙ্গী গাইড আর ঘরে ওষুধ — সব এক জায়গায়,
            সহজ বাংলায়।
          </p>

          {/* Search bar */}
          <form
            action="/doctors"
            method="get"
            className="flex w-full items-center gap-4 rounded-[14px] bg-white py-2 pr-2 pl-6 focus-within:ring-2 focus-within:ring-accent"
          >
            <span className="hidden text-base leading-6 font-medium whitespace-nowrap text-ink sm:inline">
              সেবা: ডাক্তার
            </span>
            <span aria-hidden className="hidden text-base text-line sm:inline">
              |
            </span>
            <input
              type="search"
              name="q"
              aria-label="ডাক্তারের নাম বা বিভাগ"
              placeholder="ডাক্তারের নাম বা বিভাগ লিখুন"
              className="min-w-0 flex-1 bg-transparent text-base leading-6 text-ink outline-none placeholder:text-ink-3"
            />
            <button
              type="submit"
              className="rounded-[10px] bg-accent px-[26px] py-[13px] text-base leading-6 font-semibold whitespace-nowrap text-brand-900"
            >
              খুঁজুন
            </button>
          </form>

          {/* Stats */}
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[30px] leading-[45px] font-bold text-accent">
                  {stat.value}
                </dd>
                <p className="text-sm leading-[21px] text-brand-100" aria-hidden>
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* Slider dots (static for now, carousel pore) */}
      <div
        aria-hidden
        className="absolute bottom-4 left-1/2 flex w-[84px] -translate-x-1/2 items-center justify-between"
      >
        <span className="size-[10px] rounded-full bg-brand-700" />
        <span className="size-[10px] rounded-full bg-ph" />
        <span className="size-[10px] rounded-full bg-ph" />
        <span className="size-[10px] rounded-full bg-ph" />
      </div>
    </section>
  );
}