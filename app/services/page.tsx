import { SiteHeader } from "@/components/site-header"
import { ServicesGrid } from "@/components/services-grid"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <div className="container py-16">
          <h1 className="mb-12 text-4xl font-bold text-logofBlue">Our Services</h1>
          <ServicesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

