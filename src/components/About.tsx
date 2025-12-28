import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaUsers, FaTrophy, FaStar, FaDumbbell } from "react-icons/fa";

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}+</span>;
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: FaUsers, label: "Members Trained", value: 1000 },
    { icon: FaDumbbell, label: "Years of Experience", value: 10 },
    { icon: FaTrophy, label: "Expert Trainers", value: 15 },
    { icon: FaStar, label: "Customer Rating", value: 4.5 },
  ];

  const features = [
    "Spacious and well-equipped facility",
    "Latest state-of-the-art machines",
    "Dedicated strength training zone",
    "Modern cardio section",
    "Professional & friendly trainers",
    "Personalized fitness plans",
    "Result-oriented programs",
    "Clean and premium environment",
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            About Muscle Tree Gym Kolhapur
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Muscle Tree Gym is one of Kolhapur's top-rated fitness centers, located in Nagalapark. We're dedicated to helping you achieve your fitness goals through personalized training, expert guidance from certified trainers, and world-class facilities with state-of-the-art equipment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover-lift rounded-lg"
            >
              <stat.icon className="text-4xl md:text-5xl text-primary mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-display text-gradient mb-2">
                {stat.label === "Customer Rating" ? (
                  <span>{stat.value}</span>
                ) : (
                  <AnimatedCounter end={stat.value} />
                )}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-display mb-8 text-center text-gradient">
            Why Choose Muscle Tree Gym?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full flex-shrink-0" />
                <p className="text-foreground/90">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display mb-4 text-accent">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Muscle Tree Gym in Kolhapur, we're committed to providing a premium fitness experience that combines cutting-edge equipment, expert training from certified professionals, and a supportive community. Our goal is to help every member in Kolhapur transform their body and build lasting healthy habits in a clean, motivating environment. Whether you're looking for weight loss, muscle gain, or general fitness in the Nagalapark area, we're here to support your journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
