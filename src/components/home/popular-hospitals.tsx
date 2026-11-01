import Link from "next/link";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { HospitalCarousel } from "@/components/hospitals/hospital-carousel";
import { HOSPITALS } from "@/data/hospitals";

export function PopularHospitals() {
  return (
    <section className="bg-gradient-to-b from-mint to-cream py-16 md:py-[100px]">
      <Container className="flex flex-col gap-10 md:gap-[60px]">
        <SectionHeading
          title="জনপ্রিয় হাসপাতাল"
          subtitle="রাজশাহীর ১৩টি হাসপাতাল ও ডায়াগনস্টিক"
        >
          <Link
            href="/hospitals"
            className="text-[15px] leading-[22px] font-semibold whitespace-nowrap text-brand-700 hover:underline"
          >
            সব দেখুন
          </Link>
        </SectionHeading>

        <HospitalCarousel hospitals={HOSPITALS} />
      </Container>
    </section>
  );
}