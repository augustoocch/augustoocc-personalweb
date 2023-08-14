import React from 'react';
import './assets/styles/index.css'
import './assets/styles/project.css'
import './assets/styles/footer.css'

import Header from "./components/layouts/Header"
import Footer from './components/layouts/Foother';
import Proj from './components/projects/Proj';

function Projects() {
  return (
    <div>
      <Header />
      <Proj />
      <Footer />
    </div>
  )
}

export default Projects