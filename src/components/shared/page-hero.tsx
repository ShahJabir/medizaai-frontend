import Link from "next/link";
import { Container } from "@/components/shared/container";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  breadcrumbs: Crumb[];
  title: string;
  subtitle?: string;
};

export function PageHero({ breadcrumbs, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-gradient-to-r from-brand-900 to-brand-700">
      <Container className="flex flex-col gap-3 py-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] leading-5 text-brand-100">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-[32px] leading-[42px] font-bold text-white md:text-[40px] md:leading-[50px]">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base leading-6 text-brand-100 md:text-[17px] md:leading-[26px]">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}