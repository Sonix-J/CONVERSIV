import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import UseCase from "./pages/UseCases";
import Stakeholders from "./pages/Stakeholders";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/stakeholders" element={<Stakeholders />} />
      </Routes>
    </>
  );
}
