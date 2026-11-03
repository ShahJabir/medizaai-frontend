import Image from "next/image";

export function ContactMap() {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-ph">
      <Image
        src="/images/contact/map.jpg"
        alt="Medizaai অফিসের ম্যাপ"
        fill
        sizes="(min-width: 1024px) 556px, 100vw"
        className="object-cover"
      />
    </div>
  );
}