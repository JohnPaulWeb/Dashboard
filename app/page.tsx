import FrameworkSection from "./_components/FrameworkSection";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
   <div className="relative min h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <FrameworkSection />
    </main>
   </div>
  );
}
