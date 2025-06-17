import { GoogleReCaptchaProvider } from "@google-recaptcha/react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Pages/Home";
import ClubSabrina from "./Pages/ClubSabrina";
import Locales from "./Pages/Locales";
import InfoYTalles from "./Pages/Info&Talles";
import Footer from "./Pages/Footer";
import QuienesSomos from "./Pages/QuienesSomos";
import Contacto from "./Pages/Contacto";
import ScrollToTop from "./Components/ScrollToTop";
import Productos from "./Pages/Productos";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Login from "./Pages/Login";
import Registro from "./Pages/Register";

function App() {
  return (
    // <GoogleReCaptchaProvider
    //   type="v2-checkbox"
    //   siteKey="6LdBmEUrAAAAAI4DxHkIHnh3PCFUcdloqw16MuHE"
    // >
    <Router>
      <ScrollToTop />
      <NavBar />
      <div className="whatsapp-folder">
        <Button variant="">
          <Link
            to={
              "https://api.whatsapp.com/send/?phone=5491161113461&text&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <FaWhatsapp className="whatsapp" />
          </Link>
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club-sabrina" element={<ClubSabrina />} />
        <Route path="/locales" element={<Locales />} />
        <Route path="/preguntasfrecuentes" element={<InfoYTalles />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Registro />} />
      </Routes>
      <Footer />
    </Router>
    // </GoogleReCaptchaProvider>
  );
}

export default App;

// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import NavBar from "./NavBar";
// import Home from "./Pages/Home";
// import ClubSabrina from "./Pages/ClubSabrina";
// import Locales from "./Pages/Locales";
// import InfoYTalles from "./Pages/Info&Talles";
// import Footer from "./Pages/Footer";
// import QuienesSomos from "./Pages/QuienesSomos";
// import Contacto from "./Pages/Contacto";
// import ScrollToTop from "./Components/ScrollToTop";
// import Productos from "./Pages/Productos";
// import { FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Login from "./Pages/Login";
// import Registro from "./Pages/Register";

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <NavBar />
//       <div className="whatsapp-folder">
//         <Button variant="">
//           <Link
//             to={
//               "https://api.whatsapp.com/send/?phone=5491161113461&text&type=phone_number&app_absent=0"
//             }
//             target="_blank"
//           >
//             <FaWhatsapp className="whatsapp" />
//           </Link>
//         </Button>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/club-sabrina" element={<ClubSabrina />} />
//         <Route path="/locales" element={<Locales />} />
//         <Route path="/preguntasfrecuentes" element={<InfoYTalles />} />
//         <Route path="/quienes-somos" element={<QuienesSomos />} />
//         <Route path="/contacto" element={<Contacto />} />
//         <Route path="/productos" element={<Productos />} />
//         <Route path="/account/login" element={<Login />} />
//         <Route path="/account/register" element={<Registro />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
