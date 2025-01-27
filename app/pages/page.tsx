"use client";
import { SiteHeader } from "@/components/site-header";
import { ServicesGrid } from "@/components/services-grid";
import { TeamSection } from "@/components/team-section";
import { Testimonials } from "@/components/testimonials";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function PagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <div className="container py-16">
          <h1 className="mb-12 text-4xl font-bold">Our Services</h1>
          <ServicesGrid />
        </div>
        <TeamSection />
        <Testimonials />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
