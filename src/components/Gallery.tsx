import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import gymImage2 from "@/gym interior/2.jpeg";
import gymImage3 from "@/gym interior/3.jpeg";
import gymImage4 from "@/gym interior/4.jpeg";
import gymImage5 from "@/gym interior/5.jpeg";
import gymImage6 from "@/gym interior/6.jpeg";
import gymImage7 from "@/gym interior/7.jpeg";
import gymImage8 from "@/gym interior/8.jpeg";
import gymImage9 from "@/gym interior/9.jpeg";
import gymImage10 from "@/gym interior/10.jpeg";
import gymImage11 from "@/gym interior/11.jpeg";
import gymImage12 from "@/gym interior/12.jpeg";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gymImage2, alt: "Muscle Tree Gym facility in Kolhapur - Premium fitness center in Nagalapark", category: "Facility" },
    { src: gymImage3, alt: "Gym interior view at Muscle Tree Gym Kolhapur - Modern fitness facility", category: "Facility" },
    { src: gymImage4, alt: "Training area at Muscle Tree Gym - Professional workout space in Kolhapur", category: "Training" },
    { src: gymImage5, alt: "Equipment zone at Muscle Tree Gym Kolhapur - State-of-the-art gym machines", category: "Equipment" },
    { src: gymImage6, alt: "Gym floor at Muscle Tree Gym - Spacious workout area in Nagalapark Kolhapur", category: "Facility" },
    { src: gymImage7, alt: "Workout space at Muscle Tree Gym Kolhapur - Modern fitness training area", category: "Training" },
    { src: gymImage8, alt: "Premium gym equipment at Muscle Tree Gym Kolhapur - Strength training machines and weights", category: "Equipment" },
    { src: gymImage9, alt: "Muscle Tree Gym interior view - Modern fitness facility in Nagalapark Kolhapur", category: "Facility" },
    { src: gymImage10, alt: "Training section at Muscle Tree Gym Kolhapur - Personal training area", category: "Training" },
    { src: gymImage11, alt: "Fitness area at Muscle Tree Gym - Spacious workout space in Kolhapur", category: "Facility" },
    { src: gymImage12, alt: "Exercise zone at Muscle Tree Gym Kolhapur - Cardio and functional training equipment", category: "Training" },
  ];

  return (
    <section id="gallery" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-3 sm:mb-4 text-gradient px-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Take a visual tour of Muscle Tree Gym's state-of-the-art facility in Kolhapur. Explore our premium equipment, modern workout spaces, and vibrant fitness atmosphere at our Nagalapark location.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
          className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 rounded-2xl text-center"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display mb-3 sm:mb-4 text-gradient">
            Follow Our Fitness Journey
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Check out our latest workout videos, transformation stories, and fitness tips on Instagram!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display hover:shadow-glow transition-all duration-300 text-sm sm:text-base min-h-[48px]"
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
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden w-full max-w-full"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <FaTimes aria-hidden="true" />
          </button>
          <img
            src={selectedImage}
            alt="Muscle Tree Gym Kolhapur - Gallery Preview"
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            loading="eager"
            style={{ maxWidth: 'calc(100vw - 2rem)', maxHeight: 'calc(100vh - 2rem)' }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
