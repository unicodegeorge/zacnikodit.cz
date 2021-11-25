import './App.css';
import logoPurple from '../assets/logo.png';
import logoGreen from '../assets/logo-green.png'


function Nav() {
  return (
    <nav>
        <img className="logo" src={logoGreen} width="300px"/>
        <ul className="nav-links">
            <li>Profile</li>
            <li>Register</li>
            <li>Login</li>
        </ul>
    </nav>
  );
}

export default Nav;
