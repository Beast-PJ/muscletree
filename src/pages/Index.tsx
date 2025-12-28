import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
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
    </>
  );
};

export default Index;
