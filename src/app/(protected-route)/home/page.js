import HeroSection from "@/components/homeComponents/HeroSection";
import AboutPreview from "@/components/homeComponents/AboutPreview";
import RoomShowcase from "@/components/homeComponents/RoomShowcase";
import ServicesSection from "@/components/homeComponents/ServicesSection";
import GallerySection from "@/components/homeComponents/GallerySection";
import TestimonialsSection from "@/components/homeComponents/TestimonialsSection"
import ExploreTabs from "@/components/homeComponents/ExploreTabs";
import WhyChooseUs from "@/components/homeComponents/WhyChooseUs"
export default function HomePage(){
  return (
    <>
    <section>
      <HeroSection />
      <AboutPreview/>
      <RoomShowcase/>
      <WhyChooseUs/>
      <ServicesSection/>
      <TestimonialsSection/>
      <GallerySection/>
      <ExploreTabs/>
      
    </section>
    
    </>
  )
}