import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trainers = [
    {
      name: "Rajesh Patil",
      role: "Head Trainer",
      experience: "10+ Years",
      specialization: "Strength & Bodybuilding",
      certifications: ["ACE Certified", "Sports Nutrition"],
    },
    {
      name: "Priya Deshmukh",
      role: "Fitness Coach",
      experience: "7+ Years",
      specialization: "Weight Loss & Cardio",
      certifications: ["NASM Certified", "Yoga Instructor"],
    },
    {
      name: "Amit Kulkarni",
      role: "Personal Trainer",
      experience: "8+ Years",
      specialization: "Functional Training",
      certifications: ["CrossFit Level 2", "Olympic Lifting"],
    },
    {
      name: "Sneha Jadhav",
      role: "Nutrition Expert",
      experience: "5+ Years",
      specialization: "Diet & Nutrition",
      certifications: ["Dietitian", "Sports Nutrition"],
    },
  ];

  return (
    <section id="trainers" ref={ref} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Expert Trainers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified professionals are dedicated to helping you reach your fitness goals
            with personalized guidance and expert knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective"
            >
              <div className="glass-card rounded-xl overflow-hidden hover-lift transition-all duration-500">
                {/* Trainer Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-display text-white">
                        {trainer.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display mb-1 text-gradient">
                    {trainer.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{trainer.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {trainer.experience} Experience
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Specialization:</p>
                    <p className="text-sm text-muted-foreground">{trainer.specialization}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Interested in joining our team of expert trainers?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-display hover:shadow-glow transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
