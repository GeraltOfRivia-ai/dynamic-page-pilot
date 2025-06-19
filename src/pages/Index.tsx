
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Palette, Globe, Star, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            BuildAI
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#templates" className="text-gray-600 hover:text-gray-900 transition-colors">Templates</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <Button variant="outline" className="mr-2">Sign In</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
          <Sparkles className="w-4 h-4 mr-2" />
          Powered by Advanced AI
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build stunning websites
          <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            in seconds with AI
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into beautiful, professional websites instantly. Our AI understands your vision and creates pixel-perfect designs tailored to your brand.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg">
            Start Building Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image/Demo */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="AI Website Builder Interface"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why choose our AI builder?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of web design with intelligent automation and stunning results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI-Powered Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our advanced AI analyzes your content and creates beautiful, professional designs that match your brand perfectly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Go from idea to live website in minutes, not days. Our AI builds and optimizes everything automatically.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Smart Customization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fine-tune every detail with intelligent suggestions and real-time previews that adapt to your preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                See the magic happen
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Watch as our AI transforms simple prompts into stunning, fully-functional websites in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Mobile-responsive designs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">SEO optimized automatically</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Custom domain ready</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Website Creation Process"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loved by creators worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users building amazing websites
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Small Business Owner",
                content: "I went from zero to a professional website in under 10 minutes. The AI understood exactly what I needed for my bakery business.",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616c04b1d2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Marcus Rodriguez",
                role: "Freelance Designer",
                content: "As a designer, I'm impressed by the quality and attention to detail. It's like having a design team at your fingertips.",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              },
              {
                name: "Emily Watson",
                role: "Startup Founder",
                content: "We needed a landing page fast. BuildAI delivered a stunning result that converted visitors into customers immediately.",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build your dream website?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join millions of creators who've already discovered the power of AI-driven web design.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 text-lg mr-4">
            Start Building Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm opacity-75 mt-4">No credit card required • Free forever plan available</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  BuildAI
                </span>
              </div>
              <p className="text-gray-600">
                The future of website building is here. Create stunning websites with the power of AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Features</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Templates</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">API</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Careers</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900">Help Center</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Community</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Status</a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">Privacy</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 BuildAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
