import { About } from "@/components/sections/about";
import { Awards } from "@/components/sections/awards";
import { BrandStrip } from "@/components/sections/brand-strip";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { WorkShowcase } from "@/components/sections/work-showcase";

export default function Page() {
  return (
    <main className="main">
      <div className="gradient-background" />
      <Navbar />
      <Hero />
      <BrandStrip />
      <About />
      <Features />
      <WorkShowcase />
      <Team />
      <Testimonials />
      <Pricing />
      <Faq />
      <Awards />
      <Cta />
      <Footer />
    </main>
  );
}