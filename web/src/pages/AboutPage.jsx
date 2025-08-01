import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code,
  Brain,
  Zap,
  Target,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Rocket,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Mahrukh Adeel",
      role: "Web Devleloper, AI/ML Engineer & Project Lead",
      specialization: "Fullstack, Computer Vision & Deep Learning",
      focus: "YOLOv8 Roof Detection, LSTM Fault Prediction",
      image: "",
      skills: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
      github: "",
      linkedin: "",
      email: ""
    },
    {
      name: "Zainab Asghar",
      role: "Fullstack Developer, Data Scientist & Algorithm Developer",
      specialization: "Predictive Analytics & Optimization",
      focus: "Monte Carlo ROI Simulation, Random Forest Models",
      image: "",
      skills: ["R", "Python", "Scikit-learn", "SQL"],
      github: "",
      linkedin: "",
      email: ""
    },
    {
      name: "Amna Amjad",
      role: "Mobile Developer, Full-Stack Developer & System Architect",
      specialization: "Web Development & System Integration",
      focus: "Platform Development, API Integration, UI/UX",
      image: "",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      github: "",
      linkedin: "",
      email: ""
    }
  ];

  const projectTimeline = [
    { phase: "Research & Planning", duration: "Mar 2025 - Apr 2025", status: "completed" },
    { phase: "AI Model Development", duration: "May 2025 - Sep 2026", status: "current" },
    { phase: "Platform Development", duration: "Sep 2025 - Nov 2025", status: "upcoming" },
    { phase: "Testing & Optimization", duration: "Nov 2025 - Mar 2026", status: "upcoming" },
    { phase: "Final Presentation", duration: "Apr 2026", status: "upcoming" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/15 to-yellow-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
        <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <GraduationCap className="w-4 h-4 mr-2" />
              Final Year Project 2025-2026
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Meet the Team Behind
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Sunergy360
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Three passionate computer science students from NUML Islamabad, Pakistan, developing AI-powered solutions to revolutionize solar energy adoption in our country.
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500 mb-12">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Academic Year 2024-2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-orange-400 to-orange-500"
                  />
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-4">{member.specialization}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-orange-500" />
                    Project Focus
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{member.focus}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-orange-500" />
                    Technical Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button className="bg-slate-800 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Our Story
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  From Classroom to Clean Energy Innovation
                </span>
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As final-year computer science students, we witnessed firsthand the energy challenges facing Pakistan. 
                  Rising electricity costs and frequent power outages motivated us to explore how technology could 
                  accelerate solar adoption in our country.
                </p>
                {/* <p>
                  Our project combines cutting-edge AI technologies—computer vision, machine learning, and predictive 
                  analytics—to solve real-world problems in the solar industry. We're not just building software; 
                  we're creating solutions that can help Pakistani families and businesses make informed decisions 
                  about renewable energy.
                </p>
                <p>
                  What started as an academic project has evolved into a comprehensive platform that addresses 
                  key barriers to solar adoption: uncertainty about roof suitability, lack of maintenance knowledge, 
                  and unclear financial benefits.
                </p> */}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="w-6 h-6 text-blue-500" />
                  <h3 className="font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To democratize solar energy in Pakistan through intelligent, data-driven solutions that 
                  make renewable energy accessible and profitable for everyone.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket className="w-6 h-6 text-orange-500" />
                  <h3 className="font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A Pakistan where every suitable rooftop contributes to clean energy generation, 
                  powered by AI insights and community-driven adoption.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-green-500" />
                  <h3 className="font-bold text-slate-800">Our Impact</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Contributing to SDG 7 (Affordable and Clean Energy) while showcasing Pakistani 
                  talent in AI and sustainable technology innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Project Timeline
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Our Development Journey
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {projectTimeline.map((phase, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'current' ? 'bg-orange-500 animate-pulse' :
                    'bg-slate-300'
                  }`}></div>
                  
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-800">{phase.phase}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                        phase.status === 'current' ? 'bg-orange-100 text-orange-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {phase.status === 'completed' ? 'Completed' :
                         phase.status === 'current' ? 'In Progress' : 'Upcoming'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{phase.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;