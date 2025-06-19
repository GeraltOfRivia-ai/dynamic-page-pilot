
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Complete web solutions for your business
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of your web presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 hover:shadow-lg transition-shadow border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Custom Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Bespoke websites built from scratch with modern technologies, tailored to your specific business needs and brand identity.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Performance Optimization</h3>
              <p className="text-gray-300 leading-relaxed">
                Lightning-fast websites optimized for search engines and user experience. We ensure your site loads quickly and ranks well.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 hover:shadow-lg transition-shadow border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Ongoing Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Complete maintenance, updates, and technical support to keep your website running smoothly and securely 24/7.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
