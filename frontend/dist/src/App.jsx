import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";
import Ceriti from "./components/Ceriti/Ceriti";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Home />
      <About />
      <Skills />
      <Offer />
      <Ceriti />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
