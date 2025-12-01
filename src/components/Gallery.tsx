import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import strengthImage from "@/assets/strength-training.jpg";
import cardioImage from "@/assets/cardio-section.jpg";
import heroImage from "@/assets/hero-gym.jpg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroImage, alt: "Muscle Tree Gym Main Floor", category: "Facility" },
    { src: strengthImage, alt: "Strength Training Zone", category: "Equipment" },
    { src: cardioImage, alt: "Cardio Section", category: "Equipment" },
    { src: strengthImage, alt: "Weight Training Area", category: "Training" },
    { src: cardioImage, alt: "Modern Cardio Machines", category: "Equipment" },
    { src: heroImage, alt: "Gym Interior", category: "Facility" },
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
            Take a visual tour of our state-of-the-art facility, premium equipment, and vibrant atmosphere.
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
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
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
            className="absolute top-4 right-4 text-3xl text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
