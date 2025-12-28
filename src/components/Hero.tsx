import { motion } from "framer-motion";
import { FaPlay, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import heroImage from "@/gym interior/2.jpeg";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to book an appointment at Muscle Tree Gym. Please provide me with available slots and membership details."
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0 w-full max-w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Muscle Tree Gym Kolhapur - Premium fitness center in Nagalapark with state-of-the-art equipment"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center py-8 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display mb-4 sm:mb-6 text-gradient px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Best Gym in Kolhapur - Muscle Tree Gym
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display text-foreground mb-2 sm:mb-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform Your Body
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display text-accent mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform Your Life
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Join Muscle Tree Gym, the best gym in Kolhapur located in Nagalapark. We offer state-of-the-art equipment, certified personal trainers with 9+ years experience, and personalized fitness programs for weight loss, muscle gain, and functional training. Your premier fitness destination in Kolhapur.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px]"
              asChild
            >
              <a href={`https://wa.me/919922721114?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" />
                Book Appointment
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px]"
            >
              <FaPlay className="mr-2" />
              Watch Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto min-h-[48px]"
              asChild
            >
              <a href="tel:+919922721114">
                <FaPhone className="mr-2" />
                <span className="hidden sm:inline">+91 99227 21114</span>
                <span className="sm:hidden">Call Us</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
