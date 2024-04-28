/*
  Copyright (C), 2023-2024, Sara Echeverria (bl33h)
  Author: Sara Echeverria
  Edited by: Cora (kiricora)
  FileName: App.jsx
  Version: I
  Creation: 02/06/2023
  Last modification: 04/27/2024
*/

import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Languages from "../Pages/Languages";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Languages />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
