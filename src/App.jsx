import { Route, Routes, BrowserRouter as Router } from "react-router";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import ClubSabrina from "./Pages/ClubSabrina";
import Locales from "./Pages/Locales";
import InfoYTalles from "./Pages/Info&Talles";
import Footer from "./Pages/Footer";
import QuienesSomos from "./Pages/QuienesSomos";
import Contacto from "./Pages/Contacto";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club-sabrina" element={<ClubSabrina />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/preguntasfrecuentes" element={<InfoYTalles />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
