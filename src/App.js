import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElemento';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';


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
      <RenderizadoElementos/>
      <EventosES6/>
      <hr/>
      <EventosES7/>
      <hr/>
      <MasSobreEventos/>
      <hr/>
      <ComunicacionComponentes/>
      
      </section> 

      </header>
    </div>
  );
}

export default App;
