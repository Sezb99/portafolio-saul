import { useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import { FaArrowRight } from "react-icons/fa";
import { ThemeProvider } from "./context/ThemeContext";
import CvContainer from "./components/CvContainer";
import CardContainer from "./components/CardContainer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      {/* <>
        <ThemeProvider>
          <Layout className="content">
            <CardContainer/>
            <section className="form-container">
              <ContactForm />
            </section>
            <CvContainer/>
          </Layout>
        </ThemeProvider>
      </> */}
      <></>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<h1>Error 404</h1>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
