import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import PartnerSlider from "./components/PartnerSlider";
import BranchLocations from "./components/BranchLocations";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Router basename="/">
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
        <BranchLocations />
        <ContactForm />
      </Router>{" "}
    </>
  );
}

export default App;
