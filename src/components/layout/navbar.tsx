import Link from "next/link";
import { Suspense } from "react";
import { Container } from "@/components/shared/container";
import { NavLinks } from "@/components/layout/nav-links";
import { CONTACT } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="border-b border-line bg-surface">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-[10px]">
          <span className="flex size-10 items-center justify-center rounded-[20px] bg-brand-700 text-[20px] leading-[30px] font-bold text-white">
            M
          </span>
          <span className="text-[26px] leading-[39px] font-bold text-brand-900">
            Medizaai
          </span>
        </Link>

        <Suspense fallback={null}>
          <NavLinks />
        </Suspense>

        <div className="flex items-center gap-3">
          <Link
            href="/account/bookings"
            className="rounded-[10px] border border-brand-700 bg-surface px-4 py-2 text-sm leading-[21px] font-semibold whitespace-nowrap text-brand-700"
          >
            আমার বুকিং
          </Link>
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] bg-brand-700 px-4 py-2 text-sm leading-[21px] font-semibold whitespace-nowrap text-white"
          >
            হোয়াটসঅ্যাপ
          </a>
        </div>
      </Container>
    </header>
  );
}