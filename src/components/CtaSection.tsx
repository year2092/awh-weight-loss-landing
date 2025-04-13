
import React from "react";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="cta" className="bg-accent text-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold mb-6">
            Ready to Stop Struggling & Start Living Lighter?
          </h2>
          
          <p className="text-lg mb-8 text-white/90">
            Don't wait another day. Real, lasting weight loss <em>is</em> possible with expert medical guidance. Let the AWH team help you transform your health and confidence.
          </p>
          
          <div className="flex flex-col items-center mb-8">
            <Button asChild size="lg" className="bg-white text-accent hover:bg-gray-100 hover:text-accent-dark shadow-lg mb-4 text-lg px-8 py-6 h-auto animate-pulse">
              <a href="#consultation-form">Claim Your Free Consultation & Start Today!</a>
            </Button>
            
            <div className="flex items-center text-white/90 text-sm">
              <Lock className="h-3 w-3 mr-1" />
              <span>Confidential & No Obligation.</span>
            </div>
          </div>
          
          <div id="consultation-form" className="bg-white text-gray-800 rounded-lg shadow-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Take Your First Step Today</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your first name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="(555) 555-5555"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">What are your weight loss goals? (Optional)</label>
                <textarea 
                  id="message" 
                  rows={3}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Tell us a bit about what you're hoping to achieve..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white py-6 h-auto text-lg">
                Schedule My Free Consultation
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you consent to be contacted via phone/text/email. 
                Your privacy is important to us. See our <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
          
          <div className="mt-6">
            <a href="#faqs" className="text-white/90 hover:text-white underline underline-offset-4 transition-colors">
              Still have questions? Contact Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
