import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Hero from "./components/Hero";

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
        <h1>test</h1>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
