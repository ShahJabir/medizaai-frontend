import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartHydrator } from "@/components/layout/cart-hydrator";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <CartHydrator />
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}