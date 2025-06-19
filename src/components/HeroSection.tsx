
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Briefcase } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <Badge className="mb-6 bg-gray-800 text-purple-400 hover:bg-gray-700 border-gray-700">
        <Briefcase className="w-4 h-4 mr-2" />
        Professional Web Development Agency
      </Badge>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
        We build stunning websites
        <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          for your business
        </span>
      </h1>
      
      <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
        Transform your business with a professional website that converts visitors into customers. Our expert team creates custom, high-performance websites tailored to your brand and goals.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg">
          Start Your Project
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
          View Our Work
        </Button>
      </div>

      {/* Hero Image/Demo */}
      <div className="relative max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 shadow-2xl border border-gray-600">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Professional Website Development"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
        <div className="absolute -top-4 -right-4 bg-gray-800 rounded-full p-3 shadow-lg animate-bounce border border-gray-600">
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </section>
  );
};
