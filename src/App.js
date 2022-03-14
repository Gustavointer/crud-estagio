import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router';
// import Textarea from './Componentes/Resultadotextarea.js';
//import Tarefa from './Componentes/Tarefa.js'

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/tarefa" component={Tarefa} /> 
          <Link to="/Textarea">Textarea</Link>
        </Routes>
      </Router> */}
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/tarefa" component={Tarefa} />
      </Routes> */}
      
      <p>Oi</p>
    </div>
  );
}

export default App;
