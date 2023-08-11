import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/styles/index.css'
import './assets/styles/landing.css'
import './assets/styles/footer.css'

import Header from "./components/layouts/Header"
import Landing from './components/landingPage/Landing';
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
