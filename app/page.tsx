import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/home/Hero";
import TrustBar from "@/app/components/home/Trust-bar";
import Services from "@/app/components/home/Services";
import HowItWorks from "@/app/components/home/How-it-works";
import WhyUs from "@/app/components/home/Why-us";
import Stats from "@/app/components/home/Stats";
import Testimonials from "@/app/components/home/Testimonials";
import FinalCta from "@/app/components/home/Final-cta";
import { colors } from "@/lib/color";

export default function ZapaHomepage() {
  const { background, foreground } = colors;
  return (
    <div style={{ background, color: foreground }} className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Stats />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  );
}