import "./App.css";
import Home from "./Pages/home";
import Contact from "./Pages/Contact";
import Qualifications from "./Pages/Qualifications";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <Qualifications />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
