import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Teapot from './pages/Teapot';
import ProjectDetail from './pages/ProjectDetail';
import AddProject from './pages/AddProject';
import EditProject from './pages/EditProject';
import { useContext } from 'react';
import { ThemeContext } from './context/Theme.context';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<ProjectDetail />} />
        <Route path='/projects/new' element={<AddProject />} />
        <Route path='/projects/:projectId/edit' element={<EditProject />} />
        <Route path='*' element={<Teapot />} />
      </Routes>
    </div>
  );
}

export default App;
