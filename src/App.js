import React from 'react';
// notre router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* on définit les routes params des chemin url */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* si l url ne correspond à aucune route, on affiche la page d'accueil */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;