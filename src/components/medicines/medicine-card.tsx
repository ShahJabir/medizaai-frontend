"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { formatPrice, toBn } from "@/lib/bn-number";
import { useCartStore } from "@/store/cart-store";
import type { Medicine } from "@/types/medicine";

export function MedicineCard({ medicine }: { medicine: Medicine }) {
  const addItem = useCartStore((state) => state.addItem);
  const [qty, setQty] = useState(medicine.step);

  return (
    <article className="flex h-full w-full flex-col gap-3 rounded-[12px] border border-line bg-surface p-3">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[8px] bg-ph">
        <Image
          src={medicine.image}
          alt={medicine.name}
          fill
          sizes="(min-width: 1280px) 260px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-base leading-6 font-semibold text-ink">
          {medicine.name}
        </h3>
        <p className="text-sm leading-[21px] text-ink-2">{medicine.usage}</p>
        {medicine.needsPrescription && (
          <span className="self-start rounded-full bg-accent-100 px-[10px] py-[3px] text-xs leading-[18px] font-medium text-brand-900">
            প্রেসক্রিপশন লাগতে পারে
          </span>
        )}
        <p className="text-base leading-6 font-bold text-brand-700">
          {formatPrice(medicine.unitPrice)} / {medicine.unit}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(medicine.step, q - medicine.step))}
            disabled={qty <= medicine.step}
            aria-label="পরিমাণ কমান"
            className="flex size-9 items-center justify-center rounded-full border border-line text-brand-700 transition-colors hover:border-brand-700 disabled:opacity-40"
          >
            <Minus size={16} />
          </button>
          <span
            aria-live="polite"
            className="text-base leading-6 font-semibold text-ink"
          >
            {toBn(qty)} {medicine.unit}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => q + medicine.step)}
            aria-label="পরিমাণ বাড়ান"
            className="flex size-9 items-center justify-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-900"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            addItem(
              {
                slug: medicine.slug,
                name: medicine.name,
                unitPrice: medicine.unitPrice,
              },
              qty,
            )
          }
          className="h-10 rounded-[8px] border border-brand-700 text-sm leading-[21px] font-semibold text-brand-700 transition-colors hover:bg-brand-700 hover:text-white"
        >
          কার্টে যোগ করুন
        </button>
      </div>
    </article>
  );
}