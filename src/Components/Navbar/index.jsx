import Logo from "../../Assets/Images/logo1.png";
import "./style.css";
const Navbar = () => {
  return (
    <header className="navbar-container">
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <nav>
        <ul className="navbar-options">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Serviços</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#recommentadions">Recomendações</a>
          </li>
          <li>
            <a href="#hairs">Cortes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
