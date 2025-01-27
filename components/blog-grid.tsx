"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function BlogGrid() {
  const posts = [
    {
      title: "Understanding Financial Markets",
      excerpt:
        "A comprehensive guide to understanding how financial markets work and their impact on your investments.",
      date: "March 15, 2024",
      image:
        "https://solvent.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-1.jpg",
      category: "Investment",
    },
    {
      title: "Tax Planning Strategies",
      excerpt:
        "Learn about effective tax planning strategies that can help optimize your financial position.",
      date: "March 10, 2024",
      image:
        "https://solvent.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-2.jpg",
      category: "Tax",
    },
    {
      title: "Business Growth Tips",
      excerpt:
        "Essential tips and strategies for growing your business in today's competitive market.",
      date: "March 5, 2024",
      image:
        "https://solvent.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-3.jpg",
      category: "Business",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Latest News
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="group overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-primary">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      • {post.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
