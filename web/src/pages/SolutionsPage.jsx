import React, { useState } from 'react';
import { 
  Sun, 
  Eye, 
  AlertTriangle, 
  Droplets, 
  Calculator, 
  ArrowRight, 
  CheckCircle, 
  Cpu,
  Camera,
    Calendar,
  Brain,
  Zap,
  TrendingUp,
  Shield,
  BarChart3,
  Satellite,
  CloudRain,
  Settings,
  Target,
  Layers,
  Activity,
  PieChart,
  Download,
  Play,
  ChevronDown,
  ChevronRight,
  Star,
  Users,
  Building,
  Home
} from 'lucide-react';
import Navigation from '../components/Navigation';

const SolutionsPage = () => {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const modules = [
    {
      id: 'roof-analysis',
      icon: <Eye className="w-8 h-8" />,
      title: "AI-Based Roof Analysis",
      subtitle: "YOLOv8 + ResNet Architecture",
      description: "Advanced computer vision system that analyzes satellite imagery and drone footage to identify optimal rooftop locations for solar panel installation.",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        {
          icon: <Satellite className="w-5 h-5" />,
          title: "Satellite Image Processing",
          desc: "High-resolution satellite imagery analysis with sub-meter precision"
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Optimal Panel Placement",
          desc: "AI-driven placement optimization for maximum energy generation"
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: "Shading Analysis",
          desc: "Comprehensive shadow mapping throughout the day and seasons"
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Surface Assessment",
          desc: "Roof condition evaluation and structural suitability analysis"
        }
      ],
      techSpecs: {
        accuracy: "95.2%",
        processingTime: "< 30 seconds",
        resolution: "Sub-meter precision",
        coverage: "Pan-Pakistan"
      },
      benefits: [
        "Eliminate costly site visits",
        "Reduce installation errors by 85%",
        "Optimize energy output by 30%",
        "Accelerate project planning"
      ]
    },
    {
      id: 'fault-detection',
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Predictive Fault Detection",
      subtitle: "LSTM + Weather Intelligence",
      description: "Machine learning system that predicts and detects performance drops or faults in solar panels before they impact energy generation.",
      gradient: "from-orange-500 to-red-500",
      features: [
        {
          icon: <CloudRain className="w-5 h-5" />,
          title: "Weather Integration",
          desc: "Real-time weather data correlation with performance metrics"
        },
        {
          icon: <Activity className="w-5 h-5" />,
          title: "Performance Monitoring",
          desc: "Continuous tracking of panel efficiency and output"
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: "Predictive Analytics",
          desc: "AI models that forecast potential issues 2-3 weeks ahead"
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Instant Alerts",
          desc: "Real-time notifications for critical performance drops"
        }
      ],
      techSpecs: {
        accuracy: "92.8%",
        predictionWindow: "2-3 weeks",
        falsePositives: "< 5%",
        response: "Real-time"
      },
      benefits: [
        "Prevent 90% of major failures",
        "Reduce maintenance costs by 40%",
        "Minimize downtime to < 2 hours",
        "Extend panel lifespan by 15%"
      ]
    },
    {
      id: 'cleaning-alerts',
      icon: <Droplets className="w-8 h-8" />,
      title: "Smart Maintenance Alerts",
      subtitle: "Random Forest Algorithm",
      description: "Intelligent system that determines optimal cleaning and maintenance schedules based on environmental conditions and efficiency metrics.",
      gradient: "from-green-500 to-emerald-500",
      features: [
        {
          icon: <Settings className="w-5 h-5" />,
          title: "Dust Accumulation Tracking",
          desc: "Monitor dust buildup patterns specific to local conditions"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Efficiency Optimization",
          desc: "Maintain peak performance through timely interventions"
        },
        {
          icon: <Calendar className="w-5 h-5" />,
          title: "Maintenance Scheduling",
          desc: "Automated scheduling based on predictive models"
        },
        {
          icon: <PieChart className="w-5 h-5" />,
          title: "Cost-Benefit Analysis",
          desc: "Balance cleaning costs with efficiency gains"
        }
      ],
      techSpecs: {
        efficiency: "98.5%",
        costReduction: "35%",
        optimalTiming: "±2 days",
        weatherSync: "Real-time"
      },
      benefits: [
        "Maintain 95%+ efficiency",
        "Reduce cleaning costs by 35%",
        "Prevent efficiency losses",
        "Optimize maintenance cycles"
      ]
    },
    {
      id: 'roi-estimation',
      icon: <Calculator className="w-8 h-8" />,
      title: "ROI Optimization Engine",
      subtitle: "Monte Carlo Simulation",
      description: "Comprehensive financial modeling system that calculates return on investment tailored to Pakistan's energy market and local pricing structures.",
      gradient: "from-purple-500 to-pink-500",
      features: [
        {
          icon: <PieChart className="w-5 h-5" />,
          title: "Pakistan-Specific Pricing",
          desc: "Local energy tariffs and solar equipment costs"
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Energy Consumption Analysis",
          desc: "Detailed load profiling and usage pattern analysis"
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Investment Scenarios",
          desc: "Multiple financing options and payback calculations"
        },
        {
          icon: <Target className="w-5 h-5" />,
          title: "Risk Assessment",
          desc: "Comprehensive risk analysis with confidence intervals"
        }
      ],
      techSpecs: {
        accuracy: "±5%",
        scenarios: "1000+ simulations",
        updateFreq: "Monthly",
        currencies: "PKR, USD"
      },
      benefits: [
        "Accurate 20-year projections",
        "Multiple financing scenarios",
        "Risk-adjusted returns",
        "Government incentive tracking"
      ]
    }
  ];

  const clientTypes = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Homeowners",
      description: "Personal solar solutions with detailed ROI analysis",
      features: ["Roof suitability assessment", "Personal energy savings", "Maintenance alerts", "Investment planning"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Commercial Developers", 
      description: "Large-scale solar integration for developments",
      features: ["Multi-property analysis", "Portfolio optimization", "Bulk planning tools", "Enterprise dashboard"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Solar Installers",
      description: "Professional tools for installation companies",
      features: ["Client proposal tools", "Technical specifications", "Installation optimization", "Performance tracking"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI roof analysis?",
      answer: "Our YOLOv8 + ResNet system achieves 95.2% accuracy in roof detection and suitability assessment. The system has been trained on thousands of Pakistani rooftops and validated against ground-truth installations."
    },
    {
      question: "What data do you need for analysis?",
      answer: "We can work with satellite imagery (Google Earth, etc.) or drone footage. For best results, we recommend high-resolution images (minimum 0.5m/pixel) taken within the last 2 years."
    },
    {
      question: "How far in advance can you predict faults?",
      answer: "Our LSTM models can predict potential faults 2-3 weeks in advance with 92.8% accuracy. This gives you enough time to schedule preventive maintenance and avoid costly downtime."
    },
    {
      question: "Is the ROI calculation specific to Pakistan?",
      answer: "Yes, our Monte Carlo simulations use real-time Pakistani energy tariffs, local equipment costs, government incentives, and Islamabad-specific weather data for maximum accuracy."
    },
    {
      question: "How often are maintenance alerts generated?",
      answer: "Our Random Forest algorithm continuously monitors environmental conditions and panel performance. Alerts are generated as needed, typically every 2-4 weeks depending on dust accumulation and weather patterns."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
        <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Layers className="w-4 h-4 mr-2" />
            AI-Powered Solutions
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Four AI Modules,
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Infinite Possibilities
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Comprehensive AI-powered solar solutions designed specifically for Pakistan's unique environmental and economic conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              <Play className="w-5 h-5 mr-2 inline" />
              Watch Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              <Download className="w-5 h-5 mr-2 inline" />
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Module Navigation */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {modules.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeModule === index
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {module.icon}
                <span>{module.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Module Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {modules.map((module, index) => (
            activeModule === index && (
              <div key={index} className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Content */}
                <div>
                  <div className={`inline-flex items-center bg-gradient-to-r ${module.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                    {module.icon}
                    <span className="ml-2">{module.subtitle}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{module.title}</h2>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">{module.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                        <div className={`bg-gradient-to-r ${module.gradient} text-white p-2 rounded-lg`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                          <p className="text-slate-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Benefits */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="font-bold text-green-800 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {module.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-green-600" />
                          <span className="text-green-700 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Technical Specifications</h3>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {Object.entries(module.techSpecs).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-slate-800 mb-1">{value}</div>
                        <div className="text-sm text-slate-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Performance Chart Placeholder */}
                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-slate-800">Performance Metrics</h4>
                      <div className="text-sm text-slate-600">Last 30 days</div>
                    </div>
                    <div className="h-32 flex items-end justify-between space-x-2">
                      {[85, 92, 88, 95, 91, 89, 94, 96, 93, 97, 95, 98].map((height, idx) => (
                        <div key={idx} className={`bg-gradient-to-t ${module.gradient} rounded-t flex-1`} style={{height: `${height}%`}}></div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${module.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}>
                    Try This Module
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tailored for Every Client</h2>
            <p className="text-xl text-slate-600">Specialized solutions for different user types</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`bg-gradient-to-r ${client.gradient} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  {client.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">{client.title}</h3>
                <p className="text-slate-600 text-center mb-6">{client.description}</p>
                <div className="space-y-3">
                  {client.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our AI solutions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience AI-Powered Solar?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Start with a free roof analysis and discover your solar potential today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              <Camera className="w-5 h-5 mr-2 inline" />
              Start Free Analysis
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
              <Users className="w-5 h-5 mr-2 inline" />
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SolutionsPage;