import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Modal from './components/Modal'
import { useState } from "react";
function App() {

  const [isModalOpen,setIsModalOpen]=useState(false);
  const [projectNo,setProjectNo]=useState(0);

  return (
    <div className="h-[100vh] overflow-y-auto select-none hide-scrollbar">
      {isModalOpen&&<Modal projectNo={projectNo} setModal={setIsModalOpen} ></Modal>}
      <Home></Home>

      <Skills></Skills>
      <div id="projects">
      <Projects setProjectNo={setProjectNo} setModal={setIsModalOpen}></Projects>
      </div>
      <Contact></Contact>
    </div>
  );
}
export default App;
