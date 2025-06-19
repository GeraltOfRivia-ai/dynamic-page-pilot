
import { CheckCircle } from "lucide-react";

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our proven development process
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We follow a structured approach to deliver exceptional websites on time and within budget.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Discovery & Strategy Planning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Custom Design & Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg">Testing & Launch Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Development Process"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
