import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Zap, 
  Eye, 
  AlertTriangle, 
  Droplets, 
  Calculator, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Building, 
  Home,
  TrendingUp,
  Shield,
  Cpu,
  Camera,
  Brain,
  Play,
  Star,
  Award,
  ChevronRight,
  Sparkles,
  Layers,
  Target
} from 'lucide-react';
import Navigation from '../components/Navigation';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const modules = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "AI-Based Roof Analysis",
      tech: "YOLOv8 + ResNet",
      description: "Advanced satellite and drone imagery analysis to identify optimal rooftop locations for solar panel installation with precision mapping.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Predictive Fault Detection",
      tech: "LSTM + Weather Intelligence",
      description: "Machine learning algorithms that predict performance issues before they occur, integrating real-time weather data for maximum accuracy.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Smart Maintenance Alerts",
      tech: "Random Forest Algorithm",
      description: "Intelligent cleaning and maintenance scheduling based on environmental conditions, dust accumulation patterns, and efficiency metrics.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "ROI Optimization Engine",
      tech: "Monte Carlo Simulation",
      description: "Comprehensive financial modeling tailored to Pakistan's energy market, providing accurate investment projections and payback analysis.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const features = [
    { title: "Precision Analysis", desc: "Sub-meter accuracy in roof mapping" },
    { title: "Real-time Monitoring", desc: "24/7 performance tracking" },
    { title: "Predictive Intelligence", desc: "Early fault detection system" },
    { title: "Local Optimization", desc: "Pakistan-specific calculations" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-green-200/25 to-emerald-200/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Solar Intelligence for Pakistan
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Optimize Solar
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Performance
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-700 to-slate-600 bg-clip-text text-transparent">
                  with AI
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Advanced machine learning solutions for rooftop analysis, fault prediction, and ROI optimization - specifically designed for Islamabad's solar conditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Analyze Your Roof
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-slate-800 text-sm">{feature.title}</span>
                    </div>
                    <p className="text-xs text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Dashboard Mockup */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-slate-600">Solar Analysis Dashboard</div>
                  </div>
                  
                  {/* Roof Analysis Visual */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-800">Roof Suitability Analysis</h3>
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Excellent
                      </div>
                    </div>
                    
                    {/* Simulated Roof Grid */}
                    <div className="grid grid-cols-6 gap-1 mb-4">
                      {[...Array(24)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-8 rounded ${
                            i % 3 === 0 ? 'bg-green-400' : 
                            i % 4 === 0 ? 'bg-yellow-400' : 
                            'bg-blue-400'
                          } opacity-80`}
                        ></div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Coverage: 85%</span>
                      <span className="text-slate-600">Efficiency: 94%</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-800 mb-1">24.5kW</div>
                      <div className="text-xs text-slate-600">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">₨2.1M</div>
                      <div className="text-xs text-slate-600">Annual Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">3.2yr</div>
                      <div className="text-xs text-slate-600">Payback</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-xl shadow-lg animate-bounce">
                  <Brain className="w-6 h-6" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl shadow-lg animate-pulse">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Modules Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Layers className="w-4 h-4 mr-2" />
              AI-Powered Modules
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Intelligent Solar Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four core AI modules working together to deliver comprehensive solar optimization for Pakistani conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${module.gradient} text-white p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {module.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{module.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <Cpu className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-600">{module.tech}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed">{module.description}</p>
                
                <div className="mt-6 flex items-center text-sm font-medium text-slate-700 group-hover:text-orange-600 transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                From Analysis to Installation
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                icon: <Camera className="w-8 h-8" />, 
                title: "Upload Imagery", 
                desc: "Satellite or drone photos of your property",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: <Brain className="w-8 h-8" />, 
                title: "AI Processing", 
                desc: "Advanced algorithms analyze suitability and layout",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Smart Monitoring", 
                desc: "Continuous performance tracking and alerts",
                color: "from-orange-500 to-red-500"
              },
              { 
                icon: <TrendingUp className="w-8 h-8" />, 
                title: "ROI Analysis", 
                desc: "Detailed financial projections for Pakistan",
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Award className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transform Your Roof into a 
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Solar Powerhouse</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join the solar revolution in Pakistan with AI-powered insights that guarantee optimal performance and maximum returns.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              <Camera className="w-5 h-5 mr-2" />
              Start Free Analysis
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              Talk to Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sun className="w-8 h-8 text-orange-500" />
                <div>
                  <span className="text-xl font-bold text-white">Sunergy360</span>
                  <div className="text-xs text-slate-400">AI Solar Intelligence</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming Pakistan's solar landscape with artificial intelligence and data-driven insights.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">AI Solutions</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">Roof Analysis</div>
                <div className="hover:text-white transition-colors cursor-pointer">Fault Detection</div>
                <div className="hover:text-white transition-colors cursor-pointer">Smart Maintenance</div>
                <div className="hover:text-white transition-colors cursor-pointer">ROI Calculator</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-white transition-colors cursor-pointer">Technology</div>
                <div className="hover:text-white transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-slate-400">
                <div>Islamabad, Pakistan</div>
                <div>info@sunergy360.pk</div>
                <div>+92 XXX XXXXXXX</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Sunergy360. All rights reserved.</p>
            <div className="flex items-center space-x-2 text-sm text-slate-400 mt-4 md:mt-0">
              <span>Supporting SDG 7:</span>
              <span className="text-green-400 font-medium">Affordable and Clean Energy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;