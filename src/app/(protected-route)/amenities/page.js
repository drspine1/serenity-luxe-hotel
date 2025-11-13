import Hero from "@/components/amenitiesComponents/Hero";
import AmenitiesGrid from "@/components/amenitiesComponents/AmenitiesGrid";
import Wellness from "@/components/amenitiesComponents/Wellness";
import Dining from "@/components/amenitiesComponents/Dining";
import Experiences from "@/components/amenitiesComponents/Experiences";
import CTASection from "@/components/amenitiesComponents/CTASection";


export default function AmenitiesPage() {
  return (
    <>
  <main>
      <Hero />
      <AmenitiesGrid />
      <Wellness />
      <Dining />
      <Experiences />
      <CTASection />

  </main>
    </>
  )
}