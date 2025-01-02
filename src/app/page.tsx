import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import CallToActionSection from "@/components/CallToActionSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">

      <nav className="fixed w-full top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="font-bold">KCIC AI</div>
        </div>
      </nav>

      <HeroSection />
      <ServicesSection/>
      <AboutUsSection />
      <CallToActionSection />
      <Footer/>
    </main>
  );
}
