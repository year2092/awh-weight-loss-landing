
import React from "react";

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-bold text-gray-800 mb-6 leading-tight">
            Stuck in the Weight Loss Trap? <span className="text-accent">It's Not Your Fault.</span>
          </h2>
          
          <div className="relative h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg mb-10 mx-auto max-w-lg hover:shadow-xl transition-all duration-300">
            <img 
              src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Weight loss struggle" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          <div className="space-y-6 text-left">
            <p className="text-gray-700 leading-relaxed">
              Tried <em className="text-accent font-medium">everything</em>? Endless diets, grueling workouts, counting every single calorie... only to see the scale refuse to budge, or worse, the weight comes <em className="text-accent font-medium">roaring</em> back. You feel like your metabolism is broken. Health worries (like prediabetes) are creeping in.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              It's <em className="text-accent font-medium">exhausting</em>. It steals your confidence, drains your energy, and leaves you wondering if you'll <em className="text-accent font-medium">ever</em> feel good in your own skin again. You deserve more than temporary fixes. You need a solution that addresses your biology, not just willpower.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
