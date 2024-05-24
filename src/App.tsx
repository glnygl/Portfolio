import React from 'react';
import './App.css';
import HomeScreen from '../src/screens/Home/index'
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../src/components/NavBar'
import About from './screens/Home/About';
import Experience from './screens/Home/Experience';
import Projects from './screens/Home/Projects';
import Contact from './screens/Home/Contact';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      {/* <HomeScreen></HomeScreen> */}
    </div>
  );
}

export default App;
