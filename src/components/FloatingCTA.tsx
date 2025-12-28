import { motion } from "framer-motion";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to book an appointment at Muscle Tree Gym. Please provide me with available slots and membership details."
  );

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 sm:gap-4 max-w-[calc(100vw-2rem)]">
      {/* WhatsApp Appointment Button */}
      <motion.a
        href={`https://wa.me/919922721114?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 min-w-[48px] min-h-[48px]"
        title="Book Appointment via WhatsApp"
        aria-label="Book Appointment via WhatsApp"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
      </motion.a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-lg hover:shadow-glow transition-all duration-300 min-w-[48px] min-h-[48px]"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingCTA;
