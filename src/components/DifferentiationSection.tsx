
import React from "react";
import { Users, Dna, FlaskConical, MonitorSmartphone, DollarSign, Heart } from "lucide-react";

const DifferentiationSection = () => {
  return (
    <section id="why-us" className="bg-gradient-to-b from-white to-secondary">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-bold text-gray-800 mb-6">
            The AWH Advantage: Your Partner for Safe, Lasting Results.
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Weight loss is personal. Your medical care should be too. Here's why patients choose AWH:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Doctor-Led Care, Always</h3>
            <p className="text-gray-600">Licensed clinicians oversee <em>every step</em> for maximum safety and effectiveness.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Dna className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Plans Tailored To <em>Your</em> Biology</h3>
            <p className="text-gray-600">Go beyond prescriptions with personalized nutrition & lifestyle guidance for long-term wellness.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <FlaskConical className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Access To The Latest Treatments</h3>
            <p className="text-gray-600">Get the most effective options, including advanced therapies like Tirzepatide + B12 for potentially enhanced results.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <MonitorSmartphone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Convenient Care That Fits <em>Your</em> Life</h3>
            <p className="text-gray-600">Choose easy telehealth visits or discreet, welcoming in-person appointments.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clear, Upfront Pricing</h3>
            <p className="text-gray-600">No surprises. Understand the investment in your health from day one.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Compassionate, Judgment-Free Support</h3>
            <p className="text-gray-600">We're your dedicated partners, empowering you towards your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
