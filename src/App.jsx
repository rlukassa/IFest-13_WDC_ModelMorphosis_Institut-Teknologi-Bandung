import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import Testimonial from "./pages/EduPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import EduPage from "./pages/EduPage";
import FaQPage from "./pages/FaQPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        // ketika kita mengakses Route halaman utama, maka akan diarahkan ke
        HomePage
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/EduPage" element={<EduPage />} />
        <Route path="/syarat-ketentuan" element={<SyaratKetenPage />} />
        <Route path="/faq" element={<FaQPage />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
