import "./App.css";
import Home from "./Pages/home";
import Contact from "./Pages/Contact";
import Qualifications from "./Pages/Qualifications";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Qualifications />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
