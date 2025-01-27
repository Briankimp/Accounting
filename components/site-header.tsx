import Link from "next/link"
import { Clock, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export function SiteHeader() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between border-b py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-logofBlue" />
              <span>Monday-Friday 08:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-logofBlue" />
              <span>+254768025476</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-logofBlue" />
              <span>logofenterprises@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            <Logo />
          </Link>
          <nav className="flex items-center gap-8  text-xl">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-logofBlue"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-medium text-gray-700 hover:text-logofBlue"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-logofBlue"
            >
              Contact
            </Link>
            <Button
              asChild
              variant="outline"
              className="ml-4 hover:bg-logofBlue"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

