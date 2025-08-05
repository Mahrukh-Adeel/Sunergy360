import React, { useState } from 'react';
import { Sun, Mail, Lock, Eye, EyeOff, ArrowLeft, User, Phone, Building, CheckCircle, Shield } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup attempted with:', formData);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword && acceptTerms;

  const getPasswordStrength = () => {
    const password = formData.password;
    if (password.length === 0) return { strength: 0, text: '' };
    if (password.length < 6) return { strength: 1, text: 'Weak', color: 'text-red-500' };
    if (password.length < 8) return { strength: 2, text: 'Fair', color: 'text-yellow-500' };
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) 
      return { strength: 3, text: 'Strong', color: 'text-green-500' };
    return { strength: 2, text: 'Good', color: 'text-blue-500' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating solar orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-yellow-500/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-orange-200/50 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Back button - floating */}
      <button 
        onClick={() => window.history.back()}
        className="absolute top-8 left-8 flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 z-10"
      >
        <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-medium hidden sm:block">Back</span>
      </button>

      <div className="w-full max-w-lg relative">
        {/* Progress indicator - modern dots */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                currentStep >= 1 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                  : 'bg-slate-200 text-slate-400'
              }`}>
                {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <span className="text-xs text-slate-500 mt-2">Personal</span>
            </div>
            
            <div className={`w-16 h-0.5 transition-all duration-300 ${currentStep >= 2 ? 'bg-gradient-to-r from-orange-400 to-yellow-500' : 'bg-slate-200'}`}></div>
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                currentStep >= 2 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                  : 'bg-slate-200 text-slate-400'
              }`}>
                {currentStep === 2 ? <Shield className="w-5 h-5" /> : '2'}
              </div>
              <span className="text-xs text-slate-500 mt-2">Security</span>
            </div>
          </div>
        </div>

        {/* Main container with glassmorphism */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-orange-500/10 border border-white/20 overflow-hidden">
          
          {/* Header with gradient accent */}
          <div className="relative p-8 pb-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
            
            <div className="text-center space-y-4">
              {/* Logo */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <Sun className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <div>
                <h1 className="text-2xl font-light text-slate-800 mb-2">Join Solar Intelligence</h1>
                <p className="text-slate-500 text-sm">
                  {currentStep === 1 ? 'Tell us about yourself' : 'Secure your account'}
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 pb-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField('')}
                        className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none text-sm"
                        placeholder="First name"
                        required
                      />
                      <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'firstName' ? 'text-orange-500' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField('')}
                        className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none text-sm"
                        placeholder="Last name"
                        required
                      />
                      <User className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'lastName' ? 'text-orange-500' : 'text-slate-400'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Email field */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                    placeholder="Email address"
                    required
                  />
                  <Mail className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'email' ? 'text-orange-500' : 'text-slate-400'
                  }`} />
                </div>

                {/* Phone field */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                    placeholder="Phone number"
                    required
                  />
                  <Phone className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'phone' ? 'text-orange-500' : 'text-slate-400'
                  }`} />
                </div>

                {/* Company field */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                    placeholder="Company (optional)"
                  />
                  <Building className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                    focusedField === 'company' ? 'text-orange-500' : 'text-slate-400'
                  }`} />
                </div>

                {/* Continue button */}
                <button
                  onClick={nextStep}
                  disabled={!isStep1Valid}
                  className="w-full h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none mt-8"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Password field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-10 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                      placeholder="Create password"
                      required
                    />
                    <Lock className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'password' ? 'text-orange-500' : 'text-slate-400'
                    }`} />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors duration-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {/* Password strength indicator */}
                  {formData.password && (
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={`w-6 h-1.5 rounded-full transition-colors duration-300 ${
                              passwordStrength.strength >= level
                                ? passwordStrength.strength === 1
                                  ? 'bg-red-400'
                                  : passwordStrength.strength === 2
                                  ? 'bg-yellow-400'
                                  : 'bg-green-400'
                                : 'bg-slate-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className={`text-xs font-medium ${passwordStrength.color}`}>
                        {passwordStrength.text}
                      </span>
                    </div>
                  )}
                </div>

                {/* Confirm Password field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('confirmPassword')}
                      onBlur={() => setFocusedField('')}
                      className="w-full h-12 bg-slate-50/80 rounded-xl border-0 pl-10 pr-10 text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-400/50 transition-all duration-300 outline-none"
                      placeholder="Confirm password"
                      required
                    />
                    <Lock className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'confirmPassword' ? 'text-orange-500' : 'text-slate-400'
                    }`} />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors duration-300"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-500 text-xs">Passwords don't match</p>
                  )}
                </div>

                {/* Terms checkbox */}
                <div className="bg-slate-50/50 rounded-xl p-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 text-orange-500 border-slate-300 rounded focus:ring-orange-400/50 focus:ring-2"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      I agree to the{' '}
                      <button className="text-orange-500 hover:text-orange-600 underline">
                        Terms of Service
                      </button>{' '}
                      and{' '}
                      <button className="text-orange-500 hover:text-orange-600 underline">
                        Privacy Policy
                      </button>
                    </span>
                  </label>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3 mt-8">
                  <button
                    onClick={prevStep}
                    className="flex-1 h-12 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-medium transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!isStep2Valid || isLoading}
                    className="flex-2 h-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating...</span>
                      </div>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Login link */}
        <div className="text-center mt-8">
          <p className="text-slate-500">
            Already have an account?{' '}
            <button className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;