import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogue from "./components/Catalogue.jsx";
import CTA from "./components/CTA.jsx";
import SignupForm from "./components/SignupForm.jsx";
import Footer from "./components/Footer.jsx";
import CoffeeCustomizer from "./components/CoffeeCustomizer.jsx";

function App() {
  return (
    <div className="font-sans bg-gray-50 ">
      <Header />
      <Hero />
      <Catalogue />
      <CoffeeCustomizer />
      <CTA />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default App;
