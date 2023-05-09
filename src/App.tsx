import React, { createContext, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Common.css';
import Nav from './components/Nav';
import Main from './pages/Main'
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';

function App() {

  // const aboutRef = useRef<HTMLDivElement>(null);
  // const mainRef = useRef<HTMLDivElement>(null);

  const refs = {
    mainRef: useRef<HTMLElement>(null),
    aboutRef: useRef<HTMLElement>(null),
    skillsRef: useRef<HTMLElement>(null),
  }


  return (
    <div className="App">
      <Nav refs={refs}></Nav>
      <Main mainRef={refs.mainRef} aboutRef={refs.aboutRef}></Main>
      <About aboutRef={refs.aboutRef} ></About>
      <Skills skillsRef={refs.skillsRef}></Skills>
      <Projects></Projects> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
