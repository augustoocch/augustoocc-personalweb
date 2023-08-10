import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/layouts/Header"
import Landing from './components/landingPage/Landing';
import React, { useState, useEffect, useRef } from 'react';
import Footer from './components/layouts/Foother';



function App() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
