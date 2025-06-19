
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          WebCraft Pro
        </span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
        <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
        <a href="#process" className="text-gray-300 hover:text-white transition-colors">Process</a>
        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          Get Quote
        </Button>
      </div>
    </nav>
  );
};
