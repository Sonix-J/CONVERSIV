import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import UseCase from "./pages/UseCases";
import Stakeholders from "./pages/Stakeholders";
import About from "./pages/About";
import EarlyAccess from "./pages/EarlyAccess";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/stakeholders" element={<Stakeholders />} />
        <Route path="/about" element={<About />} />
        <Route path="/earlyaccess" element={<EarlyAccess />} />
      </Routes>
    </>
  );
}
