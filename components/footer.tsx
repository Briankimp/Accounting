import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-gray-300">
              Providing expert accounting and bookkeeping services for businesses of all sizes.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>GEOPHRY GRIFFIN OWITI, CPA II</li>
              <li>MANAGING DIRECTOR</li>
              <li>Phone: +254768025476</li>
              <li>Email: logofenterprises@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 py-4">
        <div className="container text-center text-gray-300">
          <p>&copy; 2023 LOGOF CONSULT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

