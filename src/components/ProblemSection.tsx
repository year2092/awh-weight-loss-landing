
import React from "react";

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-bold text-gray-800 mb-6">
            Stuck in the Weight Loss Trap? <span className="text-accent">(It's Not Your Fault.)</span>
          </h2>
          
          <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg mb-8 mx-auto max-w-lg">
            <img 
              src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Weight loss struggle" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          <div className="space-y-6 text-left">
            <p className="text-gray-700">
              Tried <em>everything</em>? Endless diets, grueling workouts, counting every single calorie... only to see the scale refuse to budge, or worse, the weight comes <em>roaring</em> back. You feel like your metabolism is broken. Health worries (like prediabetes) are creeping in.
            </p>
            
            <p className="text-gray-700">
              It's <em>exhausting</em>. It steals your confidence, drains your energy, and leaves you wondering if you'll <em>ever</em> feel good in your own skin again. You deserve more than temporary fixes. You need a solution that addresses your biology, not just willpower.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
