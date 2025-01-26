import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { TeamSection } from "@/components/team-section";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TeamSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
