
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-b from-secondary to-white relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-bold text-gray-800 leading-tight">
              Stop Fighting Your Body. <span className="text-accent">Finally Lose Weight & Keep It Off</span> with Doctor-Guided Semaglutide & Tirzepatide.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Sick of failed diets? Our medical experts help you safely shed stubborn pounds, crush cravings, and boost energy. Discover real, lasting results with AWH.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Button asChild size="lg" className="cta-button hover:scale-[1.03] active:scale-[0.98]">
                <a href="#cta">Claim Your Free Consultation Now</a>
              </Button>
              
              <a href="#qualify" className="text-link group flex items-center justify-center sm:justify-start gap-1 hover:gap-2 transition-all">
                See If You Qualify (Takes 60 Seconds)
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-3">
              <div className="trust-badge hover:bg-secondary/60 transition-all duration-200">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Medically Supervised</span>
              </div>
              <div className="trust-badge hover:bg-secondary/60 transition-all duration-200">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Clinically Proven</span>
              </div>
              <div className="trust-badge hover:bg-secondary/60 transition-all duration-200">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Personalized For You</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl hover-lift hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Healthy, confident people" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile hero image (visible only on small screens) */}
      <div className="mt-8 relative h-[250px] rounded-lg overflow-hidden shadow-xl mx-4 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Healthy, confident people" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
