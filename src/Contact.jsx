import React from 'react';
import './assets/styles/index.css'
import './assets/styles/contact.css'
import './assets/styles/footer.css'

import Header from "./components/layouts/Header"
import Footer from './components/layouts/Foother';
import ContactView from './components/contact/ContactView';

function Contact() {
  return (
    <div>
      <Header />
      <ContactView />
      <Footer />
    </div>
  )
}

export default Contact