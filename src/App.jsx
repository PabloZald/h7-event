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

function App() {
  return (
    <Router>
      <Navbar /> {/* Se muestra en todas las páginas */}
      <main className="flex-grow-1">
        <div className=""> {/* El contenedor padre */}
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
      </main>
      <Footer /> {/* Se muestra en todas las páginas */}
    </Router>
  );
}

export default App;