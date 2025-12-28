import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to book an appointment at Muscle Tree Gym. Please provide me with available slots and membership details."
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Trainers", href: "#trainers" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full ${
        isScrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 sm:gap-2 group">
            <FaDumbbell className="text-2xl sm:text-3xl text-primary transition-transform duration-300 group-hover:rotate-180" />
            <span className="text-lg sm:text-xl md:text-2xl font-display text-gradient">
              <span className="hidden sm:inline">Muscle Tree Gym</span>
              <span className="sm:hidden">MTG</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow" asChild>
              <a href={`https://wa.me/919922721114?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-foreground p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 px-2 min-h-[44px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="lg" className="w-full bg-gradient-to-r from-primary to-accent mt-4 min-h-[48px]" asChild>
              <a href={`https://wa.me/919922721114?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2" />
                Book Now
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
