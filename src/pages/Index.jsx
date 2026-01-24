import ContactSection from "../components/ContactSection";
import FeaturesGrid from "../components/FeaturesGrid";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import PricingSection from "../components/PricingSection";
import SafeReliable from "../components/SafeReliable";
import TakeALook from "../components/TakeALook";
import Testimonials from "../components/Testimonials";
import TrustedBy from "../components/TrustedBy";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <FeaturesGrid />
      <HowItWorks />
      <TakeALook />
      <SafeReliable />
      <Testimonials />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
