import React from 'react';
import './assets/styles/index.css'
import './assets/styles/technologies.css'
import './assets/styles/footer.css'

import Header from "./components/layouts/Header";
import Footer from './components/layouts/Foother';
import Technologies from './components/technology/Technologies';

function Tech() {
  return (
    <div>
      <Header />
      <Technologies />
      <Footer />
    </div>
  )
}

export default Tech