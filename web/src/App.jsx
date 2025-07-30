import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SolutionsPage from './pages/SolutionsPage';
import TechnologyPage from './pages/TechnologyPage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
    </Routes>
  );
};

export default App;