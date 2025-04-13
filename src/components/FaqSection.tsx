
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Is this safe? Side effects?",
      answer: "Yes, under our medical supervision. Most side effects are mild, temporary gut issues (like nausea) managed by careful dosing. We review your full health history first to ensure safety. Your free consult covers this fully."
    },
    {
      question: "Who qualifies?",
      answer: "Typically adults with BMI ≥ 30, or ≥ 27 with weight-related issues (high BP, cholesterol, prediabetes). Your free medical consult determines if it's right and safe for you."
    },
    {
      question: "What's the cost? Insurance?",
      answer: "Costs vary by plan. We provide clear pricing in your free consult. While insurance varies, we provide documents for potential reimbursement and discuss options."
    },
    {
      question: "Do I still need diet/exercise?",
      answer: "Yes. These are powerful tools, best used with healthy habits. We guide you on sustainable lifestyle changes too."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many patients notice appetite changes within days and begin seeing weight loss within 2-4 weeks. For optimal results, most patients continue treatment for 6-12 months."
    },
    {
      question: "What's the difference between Semaglutide and Tirzepatide?",
      answer: "Both are effective GLP-1 medications, but Tirzepatide also targets a second receptor (GIP), potentially offering enhanced results for some patients. Our medical team will help determine which option is best for your specific needs."
    }
  ];

  return (
    <section id="faqs" className="bg-secondary py-16">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-bold text-gray-800 mb-6">
            Your Questions Answered.
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Quick answers to common questions about Semaglutide & Tirzepatide at AWH:
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
