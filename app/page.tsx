import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustBadge from "@/components/TrustBadge";
import TeamSection from "@/components/TeamSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black dark:bg-black light:bg-gray-50 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustBadge />
      <TeamSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
