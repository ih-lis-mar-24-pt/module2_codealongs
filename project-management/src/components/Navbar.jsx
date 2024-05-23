import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'selected' : '')}
          to='/projects'
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
