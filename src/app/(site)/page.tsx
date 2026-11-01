import { Hero } from "@/components/home/hero";
import { WhyMedizaai } from "@/components/home/why-medizaai";
import { ChooseYourNeed } from "@/components/home/choose-your-need";
import { PopularHospitals } from "@/components/home/popular-hospitals";


export default function HomePage() {
  return (
    <>
      <Hero />
        <WhyMedizaai />
        <ChooseYourNeed />
        <PopularHospitals />
    </>
  );
}