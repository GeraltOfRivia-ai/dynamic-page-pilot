
import { Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WebCraft Pro
              </span>
            </div>
            <p className="text-gray-400">
              Professional web development agency creating powerful websites that drive business growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Web Development</a>
              <a href="#" className="block text-gray-400 hover:text-white">E-commerce</a>
              <a href="#" className="block text-gray-400 hover:text-white">SEO Optimization</a>
              <a href="#" className="block text-gray-400 hover:text-white">Maintenance</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white">Portfolio</a>
              <a href="#" className="block text-gray-400 hover:text-white">Case Studies</a>
              <a href="#" className="block text-gray-400 hover:text-white">Careers</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">Get Quote</a>
              <a href="#" className="block text-gray-400 hover:text-white">Support</a>
              <a href="#" className="block text-gray-400 hover:text-white">Consultation</a>
              <a href="#" className="block text-gray-400 hover:text-white">Partnership</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebCraft Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
