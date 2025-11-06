import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home";
import "./App.css";
import Austin from "./pages/Austin";
import Pflugerville from "./pages/Pflugerville";
import Leander from "./pages/Leander";
import Georgetown from "./pages/Georgetown";
import SanMarcos from "./pages/SanMarcos";
import RoundRock from "./pages/RoundRock";
import LibertyHill from "./pages/LibertyHill";
import BraidBarPage from "./pages/BraidBar";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/RoundRock" element={<RoundRock />} />
    <Route path="/pflugerville" element={<Pflugerville />} />
    <Route path="/leander" element={<Leander />} />
    <Route path="/georgetown" element={<Georgetown />} />
    <Route path="/sanmarcos" element={<SanMarcos />} />
    <Route path="/Austin" element={<Austin />} />
    <Route path="/LibertyHill" element={<LibertyHill />} />
    <Route path="/braidbar" element={<BraidBarPage />} />

    </Routes>
  );
};

export default App;
