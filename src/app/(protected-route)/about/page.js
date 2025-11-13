import AboutHero from "@/components/aboutComponents/AboutHero";
import AmenitiesTeaser from "@/components/aboutComponents/AmenitiesTeaser";
import Awards from "@/components/aboutComponents/Awards";
import Experience from "@/components/aboutComponents/Experience";
import FAQ from "@/components/aboutComponents/FAQ";
import History from "@/components/aboutComponents/History";
import Partners from "@/components/aboutComponents/Partners";
import Sustainability from "@/components/aboutComponents/Sustainability";
import Team from "@/components/aboutComponents/Team";

export  default function AboutPage(){
  return (<>
  
          <main  className="bg-[hsl(0,0%,90%)] text-[#25003c]">
            <AboutHero />
            <History/>
            <Experience />           
            <Team />
            <Awards />
            <Sustainability/>
             <Partners />
            <AmenitiesTeaser />
            <FAQ />
          </main>
  </>)

}