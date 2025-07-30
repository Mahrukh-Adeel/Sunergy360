import React, { useState } from 'react';
import { 
  Sun, 
  Brain, 
  Eye, 
  AlertTriangle, 
  Droplets, 
  Calculator, 
  Globe, 
  Server, 
  Lock, 
  Workflow,
  Camera,
  BarChart3,
  Cpu,
  Zap,
  Shield,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Settings,
  ChevronRight,
  Play,
  Download,
  Layers,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TechnologyPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'roof-analysis',
      title: "AI Rooftop Analysis",
      subtitle: "YOLOv8 + ResNet Architecture",
      icon: <Eye className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Advanced computer vision system that analyzes satellite imagery and drone footage to identify optimal rooftop locations for solar panel installation with sub-meter precision.",
      components: [
        { name: "Obstruction Detection", purpose: "Identifies chimneys, vents, and structural obstacles using YOLO object detection" },
        { name: "Surface Material Analysis", purpose: "Evaluates roof materials and structural integrity through image classification" },
        { name: "Solar Potential Mapping", purpose: "Calculates optimal panel placement considering sun angles and shadows" }
      ],
      techDetails: {
        accuracy: "95.2%",
        processingTime: "< 30 seconds",
        resolution: "0.3m per pixel",
        coverage: "All of Pakistan"
      }
    },
    {
      id: 'fault-detection',
      title: "Predictive Fault Detection",
      subtitle: "LSTM + Weather Intelligence",
      icon: <AlertTriangle className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      description: "Machine learning system that monitors solar panel performance in real-time, predicting potential faults 2-3 weeks in advance using LSTM neural networks and weather correlation.",
      components: [
        { name: "Time-Series Analysis", purpose: "LSTM networks analyze performance patterns to detect anomalies" },
        { name: "Weather Integration", purpose: "Correlates environmental conditions with performance degradation" },
        { name: "Predictive Alerting", purpose: "Smart notification system with severity-based prioritization" }
      ],
      techDetails: {
        accuracy: "92.8%",
        predictionWindow: "2-3 weeks",
        falsePositives: "< 5%",
        dataPoints: "1000+ per day"
      }
    },
    {
      id: 'cleaning-alerts',
      title: "Smart Maintenance Engine",
      subtitle: "Random Forest Algorithm",
      icon: <Droplets className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      description: "Intelligent maintenance scheduler that optimizes cleaning schedules based on environmental factors, dust accumulation patterns, and efficiency metrics to maintain peak performance.",
      components: [
        { name: "Efficiency Monitoring", purpose: "Tracks real-time performance degradation due to dust and debris" },
        { name: "Environmental Analysis", purpose: "Analyzes weather patterns, dust storms, and seasonal variations" },
        { name: "Optimization Engine", purpose: "Random Forest algorithm determines cost-optimal cleaning schedules" }
      ],
      techDetails: {
        efficiency: "98.5%",
        costReduction: "35%",
        scheduling: "±2 day accuracy",
        factors: "15+ variables"
      }
    },
    {
      id: 'roi-estimation',
      title: "ROI Optimization Engine",
      subtitle: "Monte Carlo Simulation",
      icon: <Calculator className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      description: "Comprehensive financial modeling system that provides accurate ROI projections tailored to Pakistan's energy market, using Monte Carlo simulations for risk assessment.",
      components: [
        { name: "Cost Benefit Analysis", purpose: "Evaluates installation, maintenance, and operational costs vs savings" },
        { name: "Market Integration", purpose: "Real-time Pakistani energy tariffs and equipment pricing" },
        { name: "Risk Modeling", purpose: "Monte Carlo simulations with 1000+ scenarios for confidence intervals" }
      ],
      techDetails: {
        accuracy: "±5%",
        scenarios: "1000+ simulations",
        currencies: "PKR, USD",
        timeframe: "25-year projections"
      }
    }
  ];

  const techStack = {
    frontend: {
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React.js 18", purpose: "Modern interactive web interface with hooks and context" },
        { name: "Flutter 3.0", purpose: "Cross-platform mobile app for Android and iOS" },
        { name: "Tailwind CSS", purpose: "Utility-first CSS framework for responsive design" },
        { name: "Chart.js", purpose: "Interactive financial visualizations and performance charts" },
        { name: "Three.js", purpose: "3D roof visualizations and solar panel placement modeling" }
      ]
    },
    backend: {
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js + Express", purpose: "Scalable API server with RESTful endpoints" },
        { name: "MongoDB Atlas", purpose: "Cloud-based NoSQL database for user data and analytics" },
        { name: "Redis", purpose: "High-performance caching and session management" },
        { name: "WebSockets", purpose: "Real-time data streaming for live monitoring" }
      ]
    },
    ai_ml: {
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Python 3.9+", purpose: "Core AI/ML development environment" },
        { name: "YOLOv8", purpose: "State-of-the-art object detection for roof analysis" },
        { name: "TensorFlow 2.x", purpose: "Deep learning framework for LSTM fault detection" },
        { name: "Scikit-learn", purpose: "Machine learning library for Random Forest algorithms" },
        { name: "OpenCV", purpose: "Computer vision library for image preprocessing" }
      ]
    },
    integrations: {
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "Google Maps API", purpose: "High-resolution satellite imagery and geolocation" },
        { name: "OpenWeather API", purpose: "Real-time weather data and forecasting" },
        { name: "Firebase Cloud", purpose: "Push notifications and real-time messaging" },
        { name: "SunCalc.js", purpose: "Precise sun position and solar angle calculations" }
      ]
    }
  };

  const systemRequirements = {
    hardware: [
      { 
        component: "Processing Unit", 
        spec: "Intel Core i5 8th gen or AMD Ryzen 5", 
        purpose: "AI model inference and web processing",
        icon: <Cpu className="w-5 h-5" />
      },
      { 
        component: "Memory", 
        spec: "8GB RAM minimum, 16GB recommended", 
        purpose: "Smooth multitasking and model loading",
        icon: <Database className="w-5 h-5" />
      },
      { 
        component: "Sensors (Optional)", 
        spec: "ACS712, DS18B20, dust sensor", 
        purpose: "Real-time panel monitoring and data collection",
        icon: <Settings className="w-5 h-5" />
      },
      { 
        component: "Microcontroller", 
        spec: "ESP32 with WiFi capability", 
        purpose: "IoT data streaming and sensor integration",
        icon: <Zap className="w-5 h-5" />
      }
    ],
    software: [
      { 
        component: "Web Browsers", 
        spec: "Chrome 90+, Firefox 88+, Safari 14+", 
        purpose: "Full web application compatibility",
        icon: <Globe className="w-5 h-5" />
      },
      { 
        component: "Operating Systems", 
        spec: "Windows 10+, macOS 11+, Ubuntu 20.04+", 
        purpose: "Cross-platform desktop support",
        icon: <Monitor className="w-5 h-5" />
      },
      { 
        component: "Mobile Platforms", 
        spec: "iOS 13+, Android 8+ (API level 26)", 
        purpose: "Native mobile app functionality",
        icon: <Smartphone className="w-5 h-5" />
      },
      { 
        component: "Development Tools", 
        spec: "VS Code, PyCharm, Google Colab", 
        purpose: "AI model development and testing",
        icon: <Code className="w-5 h-5" />
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Navigation */}
        <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Layers className="w-4 h-4 mr-2" />
            Advanced AI Technology
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            The Science Behind
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Solar Intelligence
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Discover the cutting-edge AI algorithms, machine learning models, and real-time technologies 
            that power Pakistan's most advanced solar optimization platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              <Play className="w-5 h-5 mr-2 inline" />
              Technical Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              <Download className="w-5 h-5 mr-2 inline" />
              Tech Specifications
            </button>
          </div>
        </div>
      </section>

      {/* Feature Selection */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core AI Technologies</h2>
            <p className="text-xl text-slate-600">Four specialized AI modules working in harmony</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFeature === index
                    ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg scale-105`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-102'
                }`}
              >
                {feature.icon}
                <span>{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active Feature Detail */}
          {features.map((feature, index) => (
            activeFeature === index && (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Content */}
                <div>
                  <div className={`inline-flex items-center bg-gradient-to-r ${feature.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                    {feature.icon}
                    <span className="ml-2">{feature.subtitle}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">{feature.description}</p>
                  
                  {/* Technical Components */}
                  <div className="space-y-4 mb-8">
                    <h4 className="text-lg font-semibold text-slate-800 flex items-center">
                      <Workflow className="w-5 h-5 mr-2" />
                      Technical Components
                    </h4>
                    {feature.components.map((component, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className={`bg-gradient-to-r ${feature.gradient} text-white p-2 rounded-lg shrink-0`}>
                          <Target className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-1">{component.name}</h5>
                          <p className="text-slate-600 text-sm leading-relaxed">{component.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Specifications */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Performance Specifications
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {Object.entries(feature.techDetails).map(([key, value], idx) => (
                      <div key={idx} className="text-center p-4 bg-slate-50 rounded-xl">
                        <div className="text-2xl font-bold text-slate-800 mb-1">{value}</div>
                        <div className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* How It Works Flow */}
                  <div className="mb-8">
                    <h5 className="font-semibold text-slate-800 mb-4">Process Flow</h5>
                    <div className="space-y-3">
                      {feature.components.map((comp, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} text-white flex items-center justify-center text-sm font-bold`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-800">{comp.name}</div>
                            <div className="text-sm text-slate-600">{comp.purpose}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${feature.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}>
                    Learn More About This Module
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Complete Technology Stack</h2>
            <p className="text-xl text-slate-600">Enterprise-grade technologies powering our AI platform</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, stack]) => (
              <div key={category} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-r ${stack.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-6 capitalize">
                  {category.replace('_', ' & ')}
                </h3>
                <div className="space-y-4">
                  {stack.technologies.map((tech, idx) => (
                    <div key={idx} className="border-l-4 border-slate-200 pl-4 hover:border-orange-400 transition-colors">
                      <div className="font-semibold text-slate-800 mb-1">{tech.name}</div>
                      <div className="text-sm text-slate-600 leading-relaxed">{tech.purpose}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">System Requirements</h2>
            <p className="text-xl text-slate-600">Hardware and software specifications for optimal performance</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hardware Requirements */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl mr-4">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Hardware Specifications</h3>
              </div>
              <div className="space-y-4">
                {systemRequirements.hardware.map((req, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                        {req.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 mb-1">{req.component}</div>
                        <div className="text-slate-600 mb-2">{req.spec}</div>
                        <div className="text-sm text-slate-500">{req.purpose}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Requirements */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Software Compatibility</h3>
              </div>
              <div className="space-y-4">
                {systemRequirements.software.map((req, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                        {req.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-slate-800 mb-1">{req.component}</div>
                        <div className="text-slate-600 mb-2">{req.spec}</div>
                        <div className="text-sm text-slate-500">{req.purpose}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Enterprise Ready
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> AI-Powered Solar?</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Our advanced technology stack is ready to optimize your solar investment with precision and intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              <Camera className="w-5 h-5 mr-2 inline" />
              Try Live Demo
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              <Download className="w-5 h-5 mr-2 inline" />
              Technical Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default TechnologyPage;