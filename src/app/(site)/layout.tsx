import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>{children}</main>
      {/* Footer + Emergency strip pore ekhane boshbe */}
    </>
  );
}