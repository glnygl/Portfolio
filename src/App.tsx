import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/navbar';
import { useState } from "react";
import HomeSection from '../src/screens/Home/home'
import AboutSection from './screens/Home/About/about';
import ProjectsSection from './screens/Home/Projects/project';
import ContactSection from './screens/Home/Contact/contact';

function App() {

  const [section, setSection] = useState(0);

  const changeSection = (sectionIndex : number) => {
    setSection(sectionIndex)
    alert(sectionIndex);
  };

  return (
    <div className="App">
      <NavBar changeSection={changeSection} ></NavBar>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      {/* <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
