import { FaDumbbell, FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Trainers", href: "#trainers" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaDumbbell className="text-3xl text-primary" />
              <span className="text-2xl font-display text-gradient">
                Muscle Tree Gym
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your body and life at Kolhapur's premier fitness destination.
              Expert trainers, modern equipment, personalized programs.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display mb-4 text-foreground">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+919922721114" className="hover:text-primary transition-colors">
                  +91 99227 21114
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@muscletreegym.com" className="hover:text-primary transition-colors">
                  info@muscletreegym.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Nagalapark / Tarabai Park<br />
                  Kolhapur – 416003
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-display mb-4 text-foreground">Working Hours</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex justify-between">
                <span>Monday – Saturday:</span>
              </li>
              <li className="text-primary font-medium">6:00 AM – 10:00 PM</li>
              <li className="flex justify-between mt-3">
                <span>Sunday:</span>
              </li>
              <li className="text-primary font-medium">7:00 AM – 12:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Muscle Tree Gym. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms-of-service" className="text-primary hover:underline">
              Terms of Service
            </a>
            <span>•</span>
            <a href="https://muscletreegym.com" className="text-primary hover:underline">
              muscletreegym.com
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4">
            Muscle Tree Gym • Nagalapark, Kolhapur • Best Gym in Kolhapur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
