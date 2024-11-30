import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PartnerSlider from "./components/PartnerSlider";
import BranchesSlider from "./components/BranchesSlider";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <div className="max-h-screen h-screen overflow-hidden">
          <NavBarComponent />
          <div className="mt-16">
            {" "}
            {/* Adds space below fixed navbar */}
            <Hero />
          </div>
        </div>
        <AboutSection />
        <PartnerSlider />
        <BranchesSlider />
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
