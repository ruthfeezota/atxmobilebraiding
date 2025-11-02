import { Route, Routes } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home";
import "./App.css";
import Austin from "./pages/Providence";
import Pflugerville from "./pages/Pflugerville";
import Pawtucket from "./pages/Pawtucket";
import NewHaven from "./pages/NewHaven";
import Pawcatuck from "./pages/Pawcatuck";
import Boston from "./pages/Boston";
import RoundRock from "./pages/RoundRock";
import Newport from "./pages/Newport";
import Hartford from "./pages/Hartford";
import Springfield from "./pages/Springfield";
import Worcester from "./pages/Worcester";
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
    <Route path="/pflugerville" element={<pflugerville />} />
    <Route path="/pawtucket" element={<Pawtucket />} />
    <Route path="/newhaven" element={<NewHaven />} />
    <Route path="/pawcatuck" element={<Pawcatuck />} />
    <Route path="/boston" element={<Boston />} />
    <Route path="/Austin" element={<Austin />} />
    <Route path="/newport" element={<Newport />} />
    <Route path="/hartford" element={<Hartford />} />
    <Route path="/springfield" element={<Springfield />} />
    <Route path="/worcester" element={<Worcester />} />
    <Route path="/braidbar" element={<BraidBarPage />} />

    </Routes>
  );
};

export default App;
