import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import projectsData from './projects.json';
import Teapot from './pages/Teapot';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/projects'
          element={<Projects projects={projectsData} />}
        />
        <Route path='*' element={<Teapot />} />
      </Routes>
    </div>
  );
}

export default App;
