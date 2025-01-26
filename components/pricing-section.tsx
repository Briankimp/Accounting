import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      description: "Perfect for small businesses",
      features: ["Financial Planning", "Tax Advisory", "Monthly Report", "24/7 Support"],
    },
    {
      name: "Professional",
      price: "$599",
      description: "Ideal for growing companies",
      features: ["All Basic features", "Business Analytics", "Investment Strategy", "Dedicated Advisor"],
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For large organizations",
      features: ["All Pro features", "Custom Solutions", "Priority Support", "Quarterly Reviews"],
    },
  ]

  return (
    <section className="bg-muted py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Pricing Plans
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  {index === 1 ? "Get Started" : "Learn More"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

