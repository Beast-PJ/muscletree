import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import sujayImage from "@/Trainers/Sujay-Bhosal.jpeg";

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trainers = [
    {
      name: "Sujay Bhosale",
      role: "Certified Fitness Trainer",
      experience: "9+ Years",
      image: sujayImage,
      specialization: "Personal Training • Functional Training • Female Fitness • Special Population Training • Piloxing",
      certifications: ["GGFI Gold's Gym Fitness Institute"],
      instagram: "@MavenSujay",
    },
    {
      name: "Rajesh Patil",
      role: "Strength & Conditioning Coach",
      experience: "7+ Years",
      image: null,
      specialization: "Strength Training • Powerlifting • Bodybuilding • Muscle Gain Programs",
      certifications: ["Certified Strength Coach", "ISSA Certified"],
      instagram: null,
    },
    {
      name: "Priya Deshmukh",
      role: "Yoga & Wellness Instructor",
      experience: "5+ Years",
      image: null,
      specialization: "Yoga • Pilates • Flexibility Training • Stress Management • Meditation",
      certifications: ["RYT 200 Certified", "Pilates Instructor"],
      instagram: null,
    },
    {
      name: "Amit Kulkarni",
      role: "Cardio & Weight Loss Specialist",
      experience: "6+ Years",
      image: null,
      specialization: "Cardio Training • Weight Loss Programs • HIIT • Endurance Training • Fat Loss",
      certifications: ["ACE Certified", "Weight Loss Specialist"],
      instagram: null,
    },
    {
      name: "Sneha Jadhav",
      role: "Nutrition & Fitness Coach",
      experience: "4+ Years",
      image: null,
      specialization: "Nutrition Planning • Diet Consultation • Meal Prep • Weight Management • Holistic Health",
      certifications: ["Certified Nutritionist", "Fitness Nutrition Specialist"],
      instagram: null,
    },
    {
      name: "Vikram Shinde",
      role: "Functional Training Expert",
      experience: "8+ Years",
      image: null,
      specialization: "Functional Training • Athletic Performance • Sports Conditioning • Mobility Training • Injury Prevention",
      certifications: ["NASM Certified", "Functional Movement Specialist"],
      instagram: null,
    },
  ];

  return (
    <section id="trainers" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-3 sm:mb-4 text-gradient px-4">
            Expert Trainers
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Our certified professionals are dedicated to helping you reach your fitness goals
            with personalized guidance and expert knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective"
            >
              <div className="glass-card rounded-xl overflow-hidden hover-lift transition-all duration-500">
                {/* Trainer Image */}
                <div className="relative w-full overflow-hidden bg-background/50">
                  {trainer.image ? (
                    <img
                      src={trainer.image}
                      alt={`${trainer.name} - Certified Fitness Trainer at Muscle Tree Gym Kolhapur`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-5xl font-display text-white">
                          {trainer.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Trainer Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-2xl font-display mb-1 text-gradient">
                    {trainer.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{trainer.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {trainer.experience} Experience
                  </p>

                  {trainer.specialization && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Specialization:</p>
                      <p className="text-sm text-muted-foreground">{trainer.specialization}</p>
                    </div>
                  )}

                  {trainer.certifications && (
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
                  )}

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    {trainer.instagram && (
                      <a
                        href={`https://instagram.com/${trainer.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={trainer.instagram}
                        aria-label={`Follow ${trainer.name} on Instagram`}
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                    )}
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
