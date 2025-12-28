import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ Component with FAQ Schema for SEO
 * Targets long-tail keywords and common fitness-related queries
 */
const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What are the gym timings at Muscle Tree Gym Kolhapur?",
      answer: "Muscle Tree Gym is open Monday to Saturday from 6:00 AM to 10:00 PM, and on Sundays from 7:00 AM to 12:00 PM. Our flexible hours accommodate early morning workouts, lunch breaks, and evening sessions to fit your schedule."
    },
    {
      question: "Where is Muscle Tree Gym located in Kolhapur?",
      answer: "Muscle Tree Gym is conveniently located in Nagalapark / Tarabai Park area of Kolhapur (Pin Code: 416003). We're easily accessible from all parts of the city and offer ample parking space for members."
    },
    {
      question: "What services does Muscle Tree Gym offer?",
      answer: "We offer comprehensive fitness services including strength training, cardio training, personal training, weight loss programs, muscle gain programs, and diet consultation. Our certified trainers provide personalized programs tailored to your fitness goals."
    },
    {
      question: "Do you provide personal training services in Kolhapur?",
      answer: "Yes, Muscle Tree Gym offers professional personal training services with certified trainers who have 9+ years of experience. Our trainers specialize in personal fitness training, functional training, female fitness, special population training, and Piloxing. Each program is customized to meet your specific fitness goals."
    },
    {
      question: "What is the membership cost at Muscle Tree Gym?",
      answer: "We offer flexible membership plans to suit different needs and budgets. Please contact us at +91 99227 21114 or visit our gym for a personalized tour and detailed pricing information. We also offer special discounts for long-term memberships."
    },
    {
      question: "Does Muscle Tree Gym offer nutrition and diet consultation?",
      answer: "Yes, our expert trainers provide comprehensive nutrition guidance and diet consultation services. We specialize in fat loss and muscle gain nutrition plans, helping you achieve your goals through proper diet combined with exercise."
    },
    {
      question: "What equipment is available at Muscle Tree Gym?",
      answer: "Muscle Tree Gym features state-of-the-art fitness equipment including premium strength training machines, modern cardio equipment, free weights, and functional training areas. Our facility is spacious, well-maintained, and regularly updated with the latest fitness technology."
    },
    {
      question: "Is Muscle Tree Gym suitable for beginners?",
      answer: "Absolutely! Our certified trainers work with members of all fitness levels, from complete beginners to advanced athletes. We provide proper guidance, safety instructions, and progressive training programs to ensure you achieve your goals safely and effectively."
    },
    {
      question: "Do you offer programs for women specifically?",
      answer: "Yes, Muscle Tree Gym offers specialized female fitness training programs. Our certified trainers understand the unique fitness needs of women and create safe, effective workout plans. We provide a comfortable and supportive environment for female members."
    },
    {
      question: "How do I book an appointment or gym tour?",
      answer: "You can book an appointment or schedule a free gym tour by calling us at +91 99227 21114, messaging us on WhatsApp, or filling out the contact form on our website. We'll be happy to show you around and discuss your fitness goals."
    },
    {
      question: "What certifications do your trainers have?",
      answer: "Our trainers are certified by prestigious institutions including GGFI (Gold's Gym Fitness Institute). They have extensive experience in personal training, functional training, special population training, and nutrition. Our lead trainer Sujay Bhosale has 9+ years of experience and specializes in multiple fitness domains."
    },
    {
      question: "Does Muscle Tree Gym offer weight loss programs?",
      answer: "Yes, we offer comprehensive weight loss programs that combine personalized exercise routines with nutrition guidance. Our programs are designed to help you lose weight safely and sustainably while building healthy habits for long-term success."
    }
  ];

  // Inject FAQ Schema for SEO
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
  }, []);

  return (
    <section id="faq" ref={ref} className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about Muscle Tree Gym, our services, membership, and fitness programs in Kolhapur.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card mb-4 rounded-xl px-6 border-border/50">
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;


