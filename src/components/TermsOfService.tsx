import { motion } from "framer-motion";

/**
 * Terms of Service Component
 * Essential for SEO trust signals and legal compliance
 */
const TermsOfService = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display mb-8 text-gradient">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/80">
              Last updated: January 2025
            </p>
            
            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Muscle Tree Gym's website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Services</h2>
              <p>
                Muscle Tree Gym provides fitness training services, personal training, nutrition consultation, and related fitness services at our facility in Kolhapur, Maharashtra.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Membership and Payments</h2>
              <p>
                Membership fees and terms will be discussed and agreed upon at the time of enrollment. All payments are subject to our refund and cancellation policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Health and Safety</h2>
              <p>
                By using our facilities, you acknowledge that physical exercise involves risks. You agree to consult with a physician before beginning any exercise program. Muscle Tree Gym is not liable for any injuries that may occur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <p>
                <strong>Muscle Tree Gym</strong><br />
                Email: info@muscletreegym.com<br />
                Phone: +91 99227 21114<br />
                Address: Nagalapark / Tarabai Park, Kolhapur, Maharashtra 416003
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;

