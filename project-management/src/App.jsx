import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Teapot from './pages/Teapot';
import ProjectDetail from './pages/ProjectDetail';
import AddProject from './pages/AddProject';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<ProjectDetail />} />
        <Route path='/projects/new' element={<AddProject />} />
        <Route path='*' element={<Teapot />} />
      </Routes>
    </div>
  );
}

export default App;
