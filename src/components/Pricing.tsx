import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheck, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Silver",
      price: "₹999",
      period: "per month",
      features: [
        "Access to gym equipment",
        "Cardio zone access",
        "Locker facility",
        "Basic workout guidance",
        "Flexible timings",
      ],
      popular: false,
    },
    {
      name: "Gold",
      price: "₹1,999",
      period: "per month",
      features: [
        "All Silver benefits",
        "Personal trainer (2 sessions/week)",
        "Diet consultation",
        "Progress tracking",
        "Supplement guidance",
        "Group fitness classes",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹3,499",
      period: "per month",
      features: [
        "All Gold benefits",
        "Daily personal training",
        "Customized diet plans",
        "Body composition analysis",
        "Priority equipment access",
        "Unlimited group classes",
        "Steam & sauna access",
      ],
      popular: false,
    },
  ];

  return (
    <section id="plans" ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Membership Plans
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget.
            All plans include access to our world-class facilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 relative ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full font-display flex items-center gap-2">
                    <FaStar />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-display mb-4 text-gradient">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-display text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center glass-card p-8 rounded-2xl max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display mb-4 text-gradient">
            Special Offers Available
          </h3>
          <p className="text-muted-foreground mb-4">
            Get 20% off on annual memberships • Student discounts available • Corporate packages for teams
          </p>
          <p className="text-sm text-muted-foreground">
            Contact us for custom packages and group rates: <span className="text-primary font-semibold">+91 99227 21114</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
