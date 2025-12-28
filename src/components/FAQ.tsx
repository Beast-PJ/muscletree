import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which is the best gym in Kolhapur?",
      answer: "Muscle Tree Gym is widely recognized as one of the best gyms in Kolhapur. Located in Nagalapark, we offer state-of-the-art equipment, certified trainers with 9+ years of experience, personalized training programs, and a supportive community. Our members consistently achieve their fitness goals, whether it's weight loss, muscle gain, or overall wellness."
    },
    {
      question: "Is there a gym near me in Kolhapur?",
      answer: "Yes! Muscle Tree Gym is conveniently located in Nagalapark / Tarabai Park, Kolhapur - 416003. We're easily accessible from Rankala, Shivaji University area, and other parts of Kolhapur. Our prime location makes us one of the most accessible fitness centers in the city."
    },
    {
      question: "Does Muscle Tree Gym offer personal training?",
      answer: "Absolutely! Muscle Tree Gym offers comprehensive personal training services with certified trainers who have 9+ years of experience. Our personal trainers specialize in various areas including weight loss, muscle gain, functional training, female fitness, and special population training. We provide one-on-one attention to ensure you achieve your fitness goals faster and more effectively."
    },
    {
      question: "What are the gym membership plans and prices in Kolhapur?",
      answer: "Muscle Tree Gym offers three membership plans: Silver (₹999/month) with basic gym access, Gold (₹1,999/month) with personal training sessions and diet consultation, and Premium (₹3,499/month) with unlimited personal training and exclusive benefits. All plans include access to our state-of-the-art equipment and facilities."
    },
    {
      question: "What are the gym timings in Kolhapur?",
      answer: "Muscle Tree Gym is open Monday to Saturday from 6:00 AM to 10:00 PM, and on Sundays from 7:00 AM to 12:00 PM. Our flexible timings accommodate early morning workouts, lunch breaks, and evening sessions to fit your busy schedule."
    },
    {
      question: "Does Muscle Tree Gym offer weight loss programs?",
      answer: "Yes! Muscle Tree Gym specializes in weight loss and fat loss programs. Our certified trainers create personalized workout plans combining strength training, cardio, and functional exercises. We also provide diet consultation and nutrition guidance to help you achieve sustainable weight loss results."
    },
    {
      question: "Can I build muscle at Muscle Tree Gym?",
      answer: "Definitely! Muscle Tree Gym offers comprehensive muscle gain programs with scientifically-designed workout protocols. Our strength training zone is equipped with premium equipment, and our trainers provide expert guidance on proper form, progressive overload, and nutrition for optimal muscle growth."
    },
    {
      question: "Is Muscle Tree Gym good for beginners?",
      answer: "Yes, Muscle Tree Gym is perfect for beginners! Our trainers provide proper workout guidance and ensure you learn correct form and technique. We offer basic workout guidance with all memberships, and our friendly community makes it easy for newcomers to feel comfortable and motivated."
    },
    {
      question: "What makes Muscle Tree Gym different from other gyms in Kolhapur?",
      answer: "Muscle Tree Gym stands out with our 9+ years of experience, certified professional trainers, state-of-the-art equipment, personalized programs, and result-oriented approach. We're located in the prime Nagalapark area and offer flexible timings, clean facilities, and a supportive community that helps members achieve lasting results."
    },
    {
      question: "How do I join Muscle Tree Gym in Kolhapur?",
      answer: "Joining Muscle Tree Gym is easy! You can call us at +91 99227 21114, message us on WhatsApp, or visit our gym at Nagalapark / Tarabai Park, Kolhapur. We offer a free consultation and gym tour so you can see our facilities and meet our trainers before joining. Book your appointment today!"
    }
  ];

  // Inject FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const existingScript = document.getElementById("schema-faq");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "schema-faq";
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("schema-faq");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqs]);

  return (
    <section id="faq" ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/20 w-full max-w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-3 sm:mb-4 text-gradient px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Find answers to common questions about Muscle Tree Gym, the best gym in Kolhapur
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-secondary/20 transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg sm:text-xl font-display text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-primary">
                  {openIndex === index ? (
                    <FaChevronUp className="text-xl" aria-hidden="true" />
                  ) : (
                    <FaChevronDown className="text-xl" aria-hidden="true" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

