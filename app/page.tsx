import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import Science from "@/components/Science";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Shipping from "@/components/Shipping";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Benefits />
      <Science />
      <HowItWorks />
      <Comparison />
      <Reviews />
      <FAQ />
      <Shipping />
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </main>
  );
}
