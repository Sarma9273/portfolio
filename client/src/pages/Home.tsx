import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import BlogSection from "@/components/home/BlogSection";
import ResumeSection from "@/components/home/ResumeSection";
import HireMeSection from "@/components/home/HireMeSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  
  // Handle hash navigation when component mounts or location changes
  useEffect(() => {
    if (location.includes('#')) {
      const id = location.split('#')[1];
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ResumeSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
