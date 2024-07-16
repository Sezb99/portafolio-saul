import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <header className={theme}>
      <div>
        <Link to="/" className={`link ${theme}`}>
          <div className="logo"></div>
        </Link>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className={`link ${theme}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`link ${theme}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/asdas" className={`link ${theme}`}>
              Projects
            </Link>
          </li>
        </ul>
        {theme === "light" && (
          <a href="" onClick={handleTheme}>
            <MdDarkMode className={`theme-logo ${theme}`} />
          </a>
        )}
        {theme === "dark" && (
          <a href="" onClick={handleTheme}>
            <MdOutlineLightMode className={`theme-logo ${theme}`} />
          </a>
        )}
      </nav>
    </header>
  );
};

export default Header;
