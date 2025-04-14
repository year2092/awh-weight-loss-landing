
import React from "react";
import { Star, ShieldCheck, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      age: 42,
      text: "I lost 45 lbs with AWH's Tirzepatide program without feeling deprived. My energy is back, and the team made me feel supported, not judged. It truly gave me my life back.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      weightLost: "45 lbs",
      duration: "6 months"
    },
    {
      name: "Michael R.",
      age: 55,
      text: "AWH helped me lose 30 lbs using Semaglutide and finally get my prediabetes under control. My A1C dropped significantly. Their professional, medically-focused approach was exactly what I needed.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      weightLost: "30 lbs",
      duration: "5 months"
    },
    {
      name: "Jennifer L.",
      age: 38,
      text: "After struggling with weight for years, I've lost 38 lbs in 6 months with AWH. The combination of medication and personalized guidance has been life-changing. I finally feel in control.",
      image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      weightLost: "38 lbs",
      duration: "6 months"
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-bold text-gray-800 mb-6 leading-tight">
            Real Patients, Life-Changing Transformations.
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. See how AWH helped people like you finally succeed:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] group">
              <CardContent className="p-0">
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <HoverCard>
                      <HoverCardTrigger>
                        <div className="bg-accent/90 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1 cursor-pointer hover:bg-accent transition-colors">
                          <span>{testimonial.weightLost}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-white p-3 shadow-lg border border-gray-100">
                        <p className="text-sm text-gray-700">Lost {testimonial.weightLost} in {testimonial.duration}</p>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
                <div className="p-6 relative bg-white">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic leading-relaxed">{testimonial.text}</p>
                  <div className="font-medium text-gray-900">
                    {testimonial.name}, {testimonial.age}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-secondary rounded-lg p-8 shadow-inner hover:shadow-md transition-shadow duration-300">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Trusted Medical Supervision
            </h3>
            
            <p className="text-gray-700 italic mb-6 leading-relaxed">
              "As a board-certified physician, I'm impressed with AWH's thorough approach to weight management. Their protocols for Semaglutide and Tirzepatide are evidence-based and prioritize patient safety alongside effective results."
            </p>
            
            <div className="font-medium text-accent">Dr. Rebecca Johnson, MD</div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="trust-badge hover:bg-secondary/80 transition-colors duration-200">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="trust-badge hover:bg-secondary/80 transition-colors duration-200">
            <Lock className="h-4 w-4 text-accent" />
            <span>Secure Patient Portal</span>
          </div>
          <div className="trust-badge hover:bg-secondary/80 transition-colors duration-200">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>Licensed Medical Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
