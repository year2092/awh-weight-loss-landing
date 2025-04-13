
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-b from-secondary to-white relative overflow-hidden pt-8 md:pt-16">
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-bold text-gray-800 leading-tight">
              Stop Fighting Your Body. Finally Lose Weight & Keep It Off with Doctor-Guided Semaglutide & Tirzepatide.
            </h1>
            
            <p className="text-lg text-gray-600">
              Sick of failed diets? Our medical experts help you safely shed stubborn pounds, crush cravings, and boost energy. Discover real, lasting results with AWH.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="cta-button">
                <a href="#cta">Claim Your Free Consultation Now</a>
              </Button>
              
              <a href="#qualify" className="text-link group flex items-center justify-center sm:justify-start gap-1">
                See If You Qualify (Takes 60 Seconds)
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="trust-badge">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Medically Supervised</span>
              </div>
              <div className="trust-badge">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Clinically Proven</span>
              </div>
              <div className="trust-badge">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Personalized For You</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-fade-in hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Healthy, confident people" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
