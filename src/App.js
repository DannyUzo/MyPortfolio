
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Contact from './Pages/Contact';
import Qualifications from './Pages/Qualifications';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/qualifications' element={<Qualifications/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
       
      </div>
  );
}

export default App;
