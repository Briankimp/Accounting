import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, Calculator, FileText, PieChart } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      title: "Accounting",
      description: "Comprehensive accounting services for businesses of all sizes",
      icon: Calculator,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "Bookkeeping",
      description: "Accurate and timely recording of financial transactions",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    },
    {
      title: "Financial Statements",
      description: "Preparation of balance sheets, income statements, and cash flow statements",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
    },
    {
      title: "Financial Analysis",
      description: "In-depth analysis of financial performance and trends",
      icon: PieChart,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-logofBlue"
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="group text-center bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-logofBlue/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <service.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-semibold text-logofBlue">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

