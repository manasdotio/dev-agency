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
      <picture className="gradient-background" aria-hidden="true">
        <source media="(min-width: 992px)" srcSet="/images/69afb0934a0a9b77eaf024d8_background-gradient.webp" />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23ffffff'/%3E%3Cstop offset='100%25' stop-color='%23f4f7ff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='8' height='8' fill='url(%23g)'/%3E%3C/svg%3E"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <Navbar />
      <Hero />
      <BrandStrip />
      <About />
      <Features />
      <WorkShowcase />
      {/* <Team /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <Faq />
      {/* <Awards /> */}
      <Cta />
      <Footer />
    </main>
  );
}