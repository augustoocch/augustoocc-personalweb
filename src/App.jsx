import React from 'react';
import './assets/styles/index.css'
import './assets/styles/landing.css'
import './assets/styles/footer.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tech from './Tech';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/technology" element={<Tech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
