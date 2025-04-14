
import React from "react";
import { CheckCircle2, Scale, Battery, Heart, Activity, ShieldCheck } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="bg-secondary">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-bold text-gray-800 mb-6">
              Your Breakthrough: Science-Backed Weight Loss That <em>Actually</em> Works.
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Forget fad diets. Semaglutide & Tirzepatide are breakthrough prescription treatments. Under our expert medical care at AWH, they work <em>with</em> your body's natural hormones to finally unlock sustainable weight loss and better health.
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Here's the Transformation You Can Expect:
            </h3>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6 animate-slide-up">
              <div className="benefit-item">
                <div className="mt-1 shrink-0">
                  <Scale className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Shed Stubborn Fat & Keep It Off</h4>
                  <p className="text-gray-600">Achieve <em>meaningful</em>, visible fat loss (often 15%+ body weight) that <em>lasts</em>.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="mt-1 shrink-0">
                  <Battery className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Silence Hunger & Cravings</h4>
                  <p className="text-gray-600">Feel naturally full and satisfied, making healthy choices feel <em>easy</em>, not a constant battle.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="mt-1 shrink-0">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Boost Your Metabolism & Health</h4>
                  <p className="text-gray-600">Help balance blood sugar, improve insulin sensitivity, and lower risks associated with excess weight.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="mt-1 shrink-0">
                  <Activity className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rediscover Your Energy</h4>
                  <p className="text-gray-600">Feel lighter, more vibrant, and ready to embrace life with renewed vitality.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="mt-1 shrink-0">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Safe, Doctor-Managed Care</h4>
                  <p className="text-gray-600">Your entire journey is guided by licensed medical professionals monitoring your progress and safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
