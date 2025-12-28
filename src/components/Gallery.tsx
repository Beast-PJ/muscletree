import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

import gymImage8 from "@/gym interior/8.jpeg";
import gymImage9 from "@/gym interior/9.jpeg";
import gymImage10 from "@/gym interior/10.jpeg";
import gymImage11 from "@/gym interior/11.jpeg";
import gymImage12 from "@/gym interior/12.jpeg";
import gymImage13 from "@/gym interior/13.jpeg";
import gymImage14 from "@/gym interior/14.jpeg";
import gymImage15 from "@/gym interior/15.jpeg";
import gymImage16 from "@/gym interior/16.jpeg";
import gymImage17 from "@/gym interior/17.jpeg";
import gymImage18 from "@/gym interior/18.jpeg";
import gymImage19 from "@/gym interior/19.jpeg";
import gymImageWhatsApp1 from "@/gym interior/WhatsApp Image 2025-12-28 at 6.37.26 AM.jpeg";
import gymImageWhatsApp2 from "@/gym interior/WhatsApp Image 2025-12-28 at 6.38.57 AM.jpeg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gymImage8, alt: "Premium gym equipment at Muscle Tree Gym Kolhapur - Strength training machines and weights", category: "Equipment" },
    { src: gymImage9, alt: "Muscle Tree Gym interior view - Modern fitness facility in Nagalapark Kolhapur", category: "Facility" },
    { src: gymImage10, alt: "Training section at Muscle Tree Gym Kolhapur - Personal training area", category: "Training" },
    { src: gymImage11, alt: "Fitness area at Muscle Tree Gym - Spacious workout space in Kolhapur", category: "Facility" },
    { src: gymImage12, alt: "Exercise zone at Muscle Tree Gym Kolhapur - Cardio and functional training equipment", category: "Training" },
    { src: gymImage13, alt: "Gym facility at Muscle Tree Gym Kolhapur - State-of-the-art fitness center", category: "Facility" },
    { src: gymImage14, alt: "Workout equipment at Muscle Tree Gym - Modern gym machines in Kolhapur", category: "Equipment" },
    { src: gymImage15, alt: "Training space at Muscle Tree Gym Kolhapur - Professional workout area", category: "Training" },
    { src: gymImage16, alt: "Gym interior view at Muscle Tree Gym - Premium fitness center in Nagalapark Kolhapur", category: "Facility" },
    { src: gymImage17, alt: "Fitness zone at Muscle Tree Gym Kolhapur - Well-equipped training area", category: "Training" },
    { src: gymImage18, alt: "Equipment section at Muscle Tree Gym - Gym machines and weights in Kolhapur", category: "Equipment" },
    { src: gymImage19, alt: "Gym floor view at Muscle Tree Gym Kolhapur - Clean and modern fitness facility", category: "Facility" },
    { src: gymImageWhatsApp1, alt: "Muscle Tree Gym facility in Kolhapur - Best gym in Nagalapark area", category: "Facility" },
    { src: gymImageWhatsApp2, alt: "Gym interior at Muscle Tree Gym Kolhapur - Premium fitness center", category: "Facility" },
  ];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a visual tour of Muscle Tree Gym's state-of-the-art facility in Kolhapur. Explore our premium equipment, modern workout spaces, and vibrant fitness atmosphere at our Nagalapark location.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(image.src);
                }
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-display text-accent mb-1">{image.category}</span>
                <span className="text-sm font-medium text-foreground">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Reels Style Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display mb-4 text-gradient">
            Follow Our Fitness Journey
          </h3>
          <p className="text-muted-foreground mb-6">
            Check out our latest workout videos, transformation stories, and fitness tips on Instagram!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-lg font-display hover:shadow-glow transition-all duration-300"
          >
            View Instagram Reels
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-3xl text-foreground hover:text-primary transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <FaTimes aria-hidden="true" />
          </button>
          <img
            src={selectedImage}
            alt="Muscle Tree Gym Kolhapur - Gallery Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
            loading="eager"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
