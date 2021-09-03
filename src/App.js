import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          test
        </a>
    
      <section><Componente message="testing2"/>
      <hr/>
      <Propiedades/>
      <Estado/>
      <RenderizadoCondicional/>
      
      </section> 

      </header>
    </div>
  );
}

export default App;
