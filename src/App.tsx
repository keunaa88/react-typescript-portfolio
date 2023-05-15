import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import './Common.css';
import Nav from './components/Nav';
import Main from './pages/Main'
import About from './pages/About';
import Skills from './pages/Skills';
import Career from './pages/Career';
import Projects from './pages/Projects';

function App() {

  // const aboutRef = useRef<HTMLDivElement>(null);
  // const mainRef = useRef<HTMLDivElement>(null);

  const refs = {
    mainRef: useRef<HTMLElement>(null),
    aboutRef: useRef<HTMLElement>(null),
    skillsRef: useRef<HTMLElement>(null),
    careerRef: useRef<HTMLElement>(null),
    projectsRef: useRef<HTMLElement>(null),
  }


  return (
    <div className="App">
      <Nav refs={refs}></Nav>
      <Main mainRef={refs.mainRef} aboutRef={refs.aboutRef}></Main>
      <About aboutRef={refs.aboutRef} ></About>
      <Skills skillsRef={refs.skillsRef}></Skills>
      <Career careerRef={refs.careerRef}></Career>
      <Projects projectsRef={refs.projectsRef}></Projects> 
    </div>
  );
}

export default App;
