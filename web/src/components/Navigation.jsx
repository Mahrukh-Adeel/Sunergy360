import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sun, 
} from 'lucide-react';
const Navigation = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <>
        {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sun className="w-10 h-10 text-orange-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Sunergy360</span>
                <div className="text-xs text-slate-500 font-medium">AI Solar Intelligence</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('/solutions')} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Solutions</button>
              <button className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Technology</button>
              <button className="text-slate-600 hover:text-slate-900 font-medium transition-colors">About</button>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      </>
    );
};

export default Navigation;