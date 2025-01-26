import Image from "next/image"
import { motion } from "framer-motion"

export function TeamSection() {
  const team = [
    {
      name: "GEOPHRY GRIFFIN OWITI, CPA II",
      role: "MANAGING DIRECTOR",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    // Add more team members if needed
  ]

  return (
    <section className="bg-white py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-logofBlue"
        >
          Our Team
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={500}
                  objectFit="cover"
                  className="w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-logofBlue p-6 text-center transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-logofYellow">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

