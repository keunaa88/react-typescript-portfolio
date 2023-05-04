import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main'
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Main></Main>
      {/* <About></About>
      <Skills></Skills>
      <Projects></Projects> */}
      
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
