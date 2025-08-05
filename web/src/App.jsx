import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Analytics } from "@vercel/analytics/react"

const App = () => {

  return (
    <>
      <Analytics />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
    </>
  );
};

export default App;