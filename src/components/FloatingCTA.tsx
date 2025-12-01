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

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919922721114"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl" />
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
          className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-lg hover:shadow-glow transition-all duration-300"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingCTA;
