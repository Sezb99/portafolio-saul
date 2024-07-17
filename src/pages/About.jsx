import Layout from "../components/layout/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import "./About.css"

const About = () => {
  return (
    <ThemeProvider>
      <Layout classNameMain="about">
        <section className="about-me-container">
          <h1>Sobre mi</h1>
          <p>
            Ingeniero de Sistemas graduado de la Universidad de Oriente,
            especializado en el desarrollo de aplicaciones web, caracterizado
            por tener una gran capacidad para resolver problemas lógicos,
            actualmente resido en Venezuela y domino un nivel de inglés
            intermedio con habilidad para trabajar en la siguientes tecnologías:
          </p>
        </section>
        <section className="skills">
          <h1>Habilidades</h1>
          <section className="skills-container">
            <div className="skill-card-container">
              <img src=".\assets\icons8-react-js-160.png" alt="react" />
            </div>
            <div className="skill-card-container">
              <img src=".\assets\icono-html.png" alt="html5" />
            </div>
            <div className="skill-card-container">
              <img src=".\assets\icono-css3.png" alt="css3" />
            </div>
            <div className="skill-card-container">
              <img src=".\assets\icono-js.png" alt="js" />
            </div>
            <div className="skill-card-container">
              <img src=".\assets\icono-node.png" alt="node" />
            </div>
          </section>
        </section>
      </Layout>
    </ThemeProvider>
  );
};

export default About;
