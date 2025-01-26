import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <div className="container py-16">
          <h1 className="mb-12 text-4xl font-bold text-logofBlue">Contact Us</h1>
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

