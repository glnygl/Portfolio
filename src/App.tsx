import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/navbar';
import HomeSection from '../src/screens/Home/home'
import AboutSection from './screens/Home/About/about';
import ExperienceSection from './screens/Home/Experience/experience';
import ProjectsSection from './screens/Home/Projects/project';
import ContactSection from './screens/Home/Contact/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <ExperienceSection></ExperienceSection>
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
