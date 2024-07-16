import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer>
      <div>
        <span className="social-container">
          <a
            href="https://www.facebook.com/?locale=es_LA"
            target="_blank"
            className={theme}
          >
            <FaFacebook className="social-logo"/>
          </a>
          <a href="" className={theme}>
            <FaInstagram className="social-logo"/>
          </a>
          <a href="" className={theme}>
            <FaLinkedin className="social-logo"/>
          </a>
        </span>
        <div id="copyright">
          Copyright &copy; 2030 - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
