import Image from "next/image";
import Link from "next/link";
import type { Hospital } from "@/types/hospital";

export function HospitalListCard({ hospital }: { hospital: Hospital }) {
  const details = [hospital.address, hospital.phone]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="flex h-full w-full flex-col gap-[10px] rounded-[12px] border border-line bg-surface p-[14px]">
      <div className="relative aspect-[354/130] w-full overflow-hidden rounded-[10px] bg-ph">
        <Image
          src={hospital.listImage ?? hospital.image}
          alt={hospital.name}
          fill
          sizes="(min-width: 1024px) 354px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="text-[18px] leading-[26px] font-semibold text-ink">
        {hospital.name}
      </h3>
      <p className="text-sm leading-[21px] text-ink-2">
        {hospital.area} · {details || "[ঠিকানা ও ফোন যোগ হবে]"}
      </p>

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-100 px-[10px] py-[3px] text-xs leading-[18px] text-brand-700">
          {hospital.type}
        </span>
        <Link
          href={`/guides?hospital=${hospital.slug}`}
          className="rounded-[8px] border border-brand-700 bg-white px-4 py-2 text-sm leading-[21px] font-semibold whitespace-nowrap text-brand-700 transition-colors hover:bg-brand-100/40"
        >
          গাইড নিন
        </Link>
      </div>
    </article>
  );
}