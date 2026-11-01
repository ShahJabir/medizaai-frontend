type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // ডানদিকের link/button
};

export function SectionHeading({
  title,
  subtitle,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex w-full items-end justify-between gap-4">
      <div className="flex flex-col gap-[6px]">
        <h2 className="text-[28px] leading-[38px] font-bold text-brand-900 md:text-[36px] md:leading-[45px]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base leading-6 text-ink-2 md:text-[17px] md:leading-[26px]">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}