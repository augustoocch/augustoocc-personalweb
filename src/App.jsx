import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./components/layouts/Header"
import Landing from './components/landingPage/Landing';
import LandingObserver from './components/landingPage/LandingObserver';

function App() {
  return (
    <div>
      <Header />
      <Landing />
    </div>
  )
}

export default App
