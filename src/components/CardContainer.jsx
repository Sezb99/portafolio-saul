import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardContainer = () => {
  const navigate = useNavigate();
  const { theme, handleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    navigate("/about");
  };
  return (
    <section className="card-container">
      <span className="card-text-container">
        <h2 className="chakra-petch-bold animated-title">
          Hola mi nombre es Saúl
        </h2>
        <p>Me dedico al desarrollo web</p>
        <button onClick={handleClick} className={`more-about ${theme}`}>
          {" "}
          <FaArrowRight /> Mas sobre mi{" "}
        </button>
      </span>
    </section>
  );
};

export default CardContainer;
