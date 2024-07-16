import Layout from "../components/layout/Layout";
import ContactForm from "../components/ContactForm";
import CvContainer from "../components/CvContainer";
import CardContainer from "../components/CardContainer";
import { ThemeProvider } from "../context/ThemeContext";

const Home = () => {
  return (
    <ThemeProvider>
      <Layout classNameMain="home">
        <CardContainer />
        <section className="form-container">
          <ContactForm />
        </section>
        <CvContainer />
      </Layout>
    </ThemeProvider>
  );
};

export default Home;
