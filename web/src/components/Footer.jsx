import React from 'react';
import {
  Sun,
  GraduationCap,
  Users,
  BookOpen,
  Award
} from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sun className="w-8 h-8 text-orange-500" />
                <div>
                  <span className="text-xl font-bold text-white">Sunergy360</span>
                  <div className="text-xs text-slate-400 flex items-center">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    Final Year Project
                  </div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                A student-led initiative developing AI-powered solar solutions for Pakistan's renewable energy future.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                AI Modules
              </h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">Roof Analysis (YOLOv8)</div>
                <div className="hover:text-white transition-colors cursor-pointer">Fault Detection (LSTM)</div>
                <div className="hover:text-white transition-colors cursor-pointer">Smart Maintenance (RF)</div>
                <div className="hover:text-white transition-colors cursor-pointer">ROI Calculator (Monte Carlo)</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Project Info
              </h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">About Our Team</div>
                <div className="hover:text-white transition-colors cursor-pointer">Project Timeline</div>
                <div className="hover:text-white transition-colors cursor-pointer">Technology Stack</div>
                <div className="hover:text-white transition-colors cursor-pointer">Documentation</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact Team</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center">
                  <span>📍 Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span>FYP 2025-2026</span>
                </div>
                <div className="flex items-center">
                  <span>👥 3-Member CS Team</span>
                </div>
                <div className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer">
                  📧 team@sunergy360.student
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-slate-400 text-sm">
              <p>© 2025 Sunergy360 Student Team. Academic Project.</p>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <Award className="w-4 h-4" />
                <span>Computer Science Final Year Project</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-400 mt-4 md:mt-0">
              <span>Supporting SDG 7:</span>
              <span className="text-green-400 font-medium">Affordable and Clean Energy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;