import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import  Footer  from './components/Footer';
import Home from './pages/Home';
import Travel from './pages/Travel';
import EventInfo from './pages/EventInfo';
import AccessRequirements from './pages/AccessRequirements';
import RecommendedHotels from './pages/RecommendedHotels';
import Discover from './pages/Discover';
import QA from './pages/QA';
// Importación de estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BottomNav from './components/BottomNav';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar /> {/* Navegación superior fija o estática */}
      
      {/* Agregamos content-wrapper aquí. 
          d-flex y flex-column aseguran que el footer se vaya al fondo 
      */}
      <main className="flex-grow-1 content-wrapper d-flex flex-column">
        <div className="flex-grow-1"> {/* Este div envuelve solo las rutas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event-info" element={<EventInfo />} />
              <Route path="/access-requirements" element={<AccessRequirements />} />
              <Route path="/recommended-hotels" element={<RecommendedHotels />} />
              <Route path="/qa" element={<QA />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/travel" element={<Travel />} />
            </Routes>
        </div>
        
        <Footer /> {/* Al estar aquí, el padding del main lo protegerá */}
      </main>

      <BottomNav /> {/* Este flota por encima de todo */}
    </Router>
  );
}

export default App;