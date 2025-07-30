import React from 'react';
import { 
  Sun, 
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
        </>
    );
};

export default Footer;