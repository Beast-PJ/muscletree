import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaInstagram, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";
import sujayImage from "@/Trainers/Sujay-Bhosal.jpeg";
import nitinImage from "@/Trainers/nitin-patil.jpeg";
import adarshImage from "@/Trainers/Adarsh.jpeg";
import atulImage from "@/Trainers/Atul-Buchade.jpeg";
import adityaImage from "@/Trainers/aditya.jpeg";
import yogeshImage from "@/Trainers/Yogesh.jpeg";
import nikhilImage from "@/Trainers/Niikhil.jpeg";
import mahekImage from "@/Trainers/Mahek.jpeg";

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Default gym phone number (used if trainer doesn't have individual number)
  const defaultPhone = "919922721114";

  const trainers = [
    {
      name: "Sujay Bhosale",
      role: "Certified Fitness Trainer",
      experience: "9+ Years",
      image: sujayImage,
      specialization: "Personal Training • Functional Training • Female Fitness • Special Population Training • Piloxing",
      certifications: ["GGFI Gold's Gym Fitness Institute"],
      instagram: "@MavenSujay",
      phone: "+917385677661" // Add phone number here
    },
    {
      name: "Nitin Patil",
      role: "Functional & CrossFit Trainer",
      experience: "6 Years Weight Training • 3 Years Personal Training",
      image: nitinImage,
      specialization: "Functional Training • CrossFit Training",
      certifications: ["MASTERY IN FUNCTIONAL AND CROSSFIT TRAINING from MAS FITNESS ACADEMY"],
      instagram: "https://www.instagram.com/nitinpatil8252",
      facebook: "https://www.facebook.com/profile.php?id=100094698955013",
      phone: "+919623214195", // Add phone number here
    },
    {
      name: "Adarsh Jagadhane",
      role: "Weight Training Specialist",
      experience: "3 Years Weight Training",
      image: adarshImage,
      specialization: "Weight Training • Proper Workout Guidance",
      certifications: ["MASTERY IN FUNCTIONAL AND CROSSFIT TRAINING from MAS FITNESS ACADEMY"],
      instagram: "https://www.instagram.com/aadarsh_jagadhane",
      phone: "+917057713431", // Add phone number here
    },
    {
      name: "Atul Buchade",
      role: "Personal Trainer",
      experience: "4 Years",
      image: atulImage,
      specialization: "Fat Loss & Lean Muscle Gains",
      certifications: [
        "K-11 School of Fitness & Sciences Pune - Diploma in Personal Training",
        "REPS INDIA CERTIFIED Personal Trainer"
      ],
      instagram: "https://www.instagram.com/__i_am_ab_09_",
      phone: "+919822442534", // Add phone number here
    },
    {
      name: "Yogesh D. Kounder",
      role: "Personal Fitness Trainer",
      experience: "4-5 Years",
      image: yogeshImage,
      specialization: "Functional Training • CrossFit Training",
      certifications: [
        "Personal Fitness Trainer - Intellectual Fitness & Sports Academy (IFSA)",
        "MASTER IN FUNCTIONAL AND CROSS FIT TRAINING"
      ],
      instagram: "https://www.instagram.com/aesthetic__dany07",
      phone: "+918007048404", // Add phone number here
    },
    {
      name: "Niikhil Bhaagwat",
      role: "Personal Trainer",
      experience: "10+ Years",
      image: nikhilImage,
      specialization: "Personal Training • General Training • Core Training",
      certifications: ["GGFI"],
      instagram: "https://www.instagram.com/staarboy__niikyaa?igsh=NnlnYW1jaWdqMnVj&utm_source=qr",
      phone: "+91879323305"
    },
    {
      name: "Mahek Nagpal",
      role: "Women's Fitness Trainer",
      experience: "1 Year",
      image: mahekImage,
      specialization: "Women's Fitness Training • Fat Loss • Strength Training • Functional Workout • Diet & Nutrition Guidance",
      certifications: [],
      instagram: "https://www.instagram.com/nagpal_mahek_67?igsh=czg3cDZtaGdvdGR6",
      phone: "+918605147315"
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
              className="group perspective flex"
            >
              <div className="glass-card rounded-xl overflow-hidden hover-lift transition-all duration-500 flex flex-col h-full w-full">
                {/* Trainer Image */}
                <div className="relative w-full h-80 overflow-hidden bg-background/50 flex-shrink-0">
                  {trainer.image ? (
                    <img
                      src={trainer.image}
                      alt={`${trainer.name} - Certified Fitness Trainer at Muscle Tree Gym Kolhapur`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-5xl font-display text-white">
                          {trainer.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Trainer Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
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
                    <div className="mb-4 flex-grow">
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

                  {/* Social Links & Contact */}
                  <div className="pt-4 border-t border-border/50 mt-auto">
                    <div className="flex gap-3 mb-4">
                      {trainer.instagram && (
                        <a
                          href={trainer.instagram.startsWith('http') ? trainer.instagram : `https://instagram.com/${trainer.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 hover:text-purple-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110"
                          title={trainer.instagram}
                          aria-label={`Follow ${trainer.name} on Instagram`}
                        >
                          <FaInstagram className="text-lg" aria-hidden="true" />
                        </a>
                      )}
                      {trainer.facebook && (
                        <a
                          href={trainer.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30 text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110"
                          title="Facebook Profile"
                          aria-label={`Follow ${trainer.name} on Facebook`}
                        >
                          <FaFacebook className="text-lg" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                    {/* Call & WhatsApp Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={`tel:${trainer.phone?.replace(/\+/g, '') || defaultPhone}`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] shadow-lg hover:shadow-glow group"
                        aria-label={`Call ${trainer.name}`}
                      >
                        <FaPhone className="text-base group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                        <span className="text-sm sm:text-base">Call Now</span>
                      </motion.a>
                      <motion.a
                        href={`https://wa.me/${trainer.phone?.replace(/\+/g, '') || defaultPhone}?text=${encodeURIComponent(`Hi ${trainer.name}! I'm interested in personal training at Muscle Tree Gym. Can you provide me with more details?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] shadow-lg hover:shadow-xl group"
                        aria-label={`Message ${trainer.name} on WhatsApp`}
                      >
                        <FaWhatsapp className="text-base group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                        <span className="text-sm sm:text-base">WhatsApp</span>
                      </motion.a>
                    </div>
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
