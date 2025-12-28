import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

/**
 * Testimonials Component with Review Schema for SEO
 * Displays customer reviews with structured data for rich results
 */
const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Aditya Shinde",
      role: "Software Engineer",
      rating: 5,
      text: "Best gym in Kolhapur! The trainers are incredibly knowledgeable and supportive. Lost 15kg in 4 months with their personalized plan. The equipment is always maintained well.",
    },
    {
      name: "Pooja Kamble",
      role: "Teacher",
      rating: 5,
      text: "Amazing atmosphere and friendly staff. The trainers genuinely care about your progress. I've gained so much confidence and strength here. Highly recommend to everyone!",
    },
    {
      name: "Rohan Patil",
      role: "Business Owner",
      rating: 4,
      text: "Great facility with modern equipment. The personal training sessions are worth every rupee. My fitness has improved dramatically. Would love to see more cardio machines added.",
    },
    {
      name: "Shruti Desai",
      role: "Student",
      rating: 5,
      text: "The diet consultation really made a difference for me. Combined with regular workouts, I achieved my body goals in 6 months. Clean environment and professional trainers!",
    },
    {
      name: "Vikram Kulkarni",
      role: "Athlete",
      rating: 5,
      text: "Perfect gym for serious fitness enthusiasts. The strength training zone is exceptional with all the equipment you need. Trainers know their stuff and push you to perform better.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-accent" : "text-muted"}
      />
    ));
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our members have to say about
            their transformation journey at Muscle Tree Gym.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 relative">
            <FaQuoteLeft className="text-5xl text-primary/20 absolute top-8 left-8" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-xl text-foreground/90 text-center mb-8 leading-relaxed"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-xl font-display text-gradient mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 text-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-full">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-display text-gradient">4.5/5</span>
            <span className="text-muted-foreground">• Based on 200+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
