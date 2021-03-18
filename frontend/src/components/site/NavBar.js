import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Weather App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
