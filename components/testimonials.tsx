import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      text: "LOGOF CONSULT provided exceptional accounting services that helped streamline our financial processes.",
      author: "Brian",
      company: "Brian Tech-Hub",
      rating: 5,
    },
    {
      text: "Their bookkeeping expertise has been invaluable to our business growth and financial stability.",
      author: "Kimani",
      company: "Robert-Kim Printing Services",
      rating: 5,
    },
    {
      text: "The financial analysis provided by LOGOF CONSULT gave us crucial insights for strategic decision-making.",
      author: "Robert Kamau",
      company: "Utumishi Real Estate",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Testimonials background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-logofBlue/80 z-10"></div>
      <div className="container relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold text-white"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-logofYellow text-logofYellow"
                    />
                  ))}
                </div>
                <p className="mb-4 text-lg text-gray-700">{testimonial.text}</p>
                <p className="font-semibold text-logofBlue">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
