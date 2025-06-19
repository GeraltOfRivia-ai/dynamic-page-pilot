
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Palette, Globe, Star, CheckCircle, Users, Code, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
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

      {/* Process Section */}
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by businesses worldwide
            </h2>
            <p className="text-xl text-gray-300">
              See what our clients say about working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO, Fresh Bakery Co.",
                content: "WebCraft Pro transformed our online presence completely. Our new website increased our online orders by 300% in just two months.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616c04b1d2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Marcus Rodriguez",
                role: "Founder, Design Studio MX",
                content: "Professional, responsive, and delivered exactly what we envisioned. The team's attention to detail and technical expertise is outstanding.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Emily Watson",
                role: "Marketing Director, TechStart Inc.",
                content: "Our new website not only looks amazing but also performs incredibly well. Lead generation has increased by 250% since launch.",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-gray-900 border-gray-700">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
