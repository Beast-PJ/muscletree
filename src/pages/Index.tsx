import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden">
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Trainers />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
