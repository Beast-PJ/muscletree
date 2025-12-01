import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaDumbbell,
  FaHeartbeat,
  FaWeight,
  FaRunning,
  FaUserTie,
  FaAppleAlt,
} from "react-icons/fa";
import strengthImage from "@/assets/strength-training.jpg";
import cardioImage from "@/assets/cardio-section.jpg";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FaDumbbell,
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength programs using premium equipment.",
      image: strengthImage,
    },
    {
      icon: FaHeartbeat,
      title: "Cardio Training",
      description: "Improve cardiovascular health and endurance with our modern cardio equipment and guided programs.",
      image: cardioImage,
    },
    {
      icon: FaWeight,
      title: "Weight Loss Programs",
      description: "Achieve your weight loss goals with personalized plans combining exercise and nutrition guidance.",
      image: null,
    },
    {
      icon: FaRunning,
      title: "Muscle Gain Programs",
      description: "Pack on lean muscle mass with scientifically-designed workout and nutrition protocols.",
      image: null,
    },
    {
      icon: FaUserTie,
      title: "Personal Training",
      description: "Get one-on-one attention from our certified trainers for faster, more effective results.",
      image: null,
    },
    {
      icon: FaAppleAlt,
      title: "Diet Consultation",
      description: "Optimize your nutrition with customized meal plans tailored to your fitness goals.",
      image: null,
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive fitness programs designed to help you achieve your goals,
            whether it's building muscle, losing weight, or improving overall health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl hover-lift group overflow-hidden relative"
            >
              {service.image && (
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-3xl text-white" />
                </div>
                
                <h3 className="text-2xl font-display mb-3 text-foreground group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-display mb-4 text-gradient">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join Muscle Tree Gym today and get access to all our premium services and facilities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-lg font-display text-lg hover:shadow-glow transition-all duration-300"
            >
              Get Started Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
