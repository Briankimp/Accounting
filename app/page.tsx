import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ServicesGrid } from "@/components/services-grid";
import { TeamSection } from "@/components/team-section";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import React from "react";
import MyComponent from "../components/MyComponent"; // Adjust the path as necessary

export default function Home() {
  const data = { someValue: "Hello, World!" }; // Example data

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TeamSection />
        <Testimonials />
        <MyComponent data={data} />
      </main>
      <Footer />
    </div>
  );
}
