import React from 'react'
import './App.css';
import Resultadotextarea from './Componentes/Resultadotextarea.js';
//import Tarefa from './Componentes/Tarefa.js'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/tarefa" component={Tarefa} />
      </Routes> */}
      <Resultadotextarea />
    </div>
  );
}

export default App;
