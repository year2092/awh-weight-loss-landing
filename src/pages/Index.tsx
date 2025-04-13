
import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "AWH - Doctor-Guided Weight Loss Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <DifferentiationSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
