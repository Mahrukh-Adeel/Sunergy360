import React, { useState } from 'react';
import { Sun, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', { email, password });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating solar orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-yellow-500/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Back button - floating */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 z-10"
      >
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-medium hidden sm:block">Back</span>
      </button>

      <div className="w-full max-w-md relative">
        {/* Main container with glassmorphism */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-orange-500/10 border border-white/20 overflow-hidden">
          
          {/* Header with gradient accent */}
          <div className="relative p-8 pb-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            
            <div className="text-center space-y-6">
              {/* Logo */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <div>
                <h1 className="text-3xl font-light text-slate-800 mb-2">Welcome back</h1>
                <p className="text-slate-500 text-sm">Continue to your solar dashboard</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="px-8 pb-8 space-y-6">
            {/* Email field */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 bg-slate-50/80 rounded-xl border-0 pl-12 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                  placeholder="Email address"
                  required
                />
                <Mail className={`absolute left-4 top-4 w-6 h-6 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-orange-500' : 'text-slate-400'
                }`} />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 bg-slate-50/80 rounded-xl border-0 pl-12 pr-12 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                  placeholder="Password"
                  required
                />
                <Lock className={`absolute left-4 top-4 w-6 h-6 transition-colors duration-300 ${
                  focusedField === 'password' ? 'text-orange-500' : 'text-slate-400'
                }`} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-orange-500 hover:text-orange-600 transition-colors duration-300"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full h-14 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign in'
              )}
            </button>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-slate-400 text-sm">or</span>
              </div>
            </div>

            {/* Social buttons */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full h-12 bg-slate-50/80 hover:bg-slate-100 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-slate-600 font-medium">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign up link */}
        <div className="text-center mt-8">
          <p className="text-slate-500">
            Don't have an account?{' '}
            <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;