
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to grow your business online?
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Let's discuss how we can create a powerful web presence that drives results for your business.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 text-lg mr-4">
          Get Free Consultation
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-sm opacity-75 mt-4">Free consultation • Custom quotes • No obligations</p>
      </div>
    </section>
  );
};
