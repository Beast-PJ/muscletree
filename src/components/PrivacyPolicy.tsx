import { motion } from "framer-motion";

/**
 * Privacy Policy Component
 * Essential for SEO trust signals and legal compliance
 */
const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display mb-8 text-gradient">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/80">
              Last updated: January 2025
            </p>
            
            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Introduction</h2>
              <p>
                Muscle Tree Gym ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Information We Collect</h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Location data (when you provide your address)</li>
                <li>Website usage data and analytics</li>
                <li>Any information you voluntarily provide through contact forms or inquiries</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you information about our services and promotions</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;


