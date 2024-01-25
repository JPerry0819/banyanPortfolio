
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import About from './components/about/About';
import Projects from './components/Projects/Projects'
import Skills from './components/skills/Skills';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/about' element={<About />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/skills' element={<Skills />} />
    
   </Routes>
   
   
   </BrowserRouter>
  );
}

export default App;
