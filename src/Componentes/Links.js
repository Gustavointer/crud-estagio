// Rotas criadas conforme Capítulo 5 - Gerenciando rotas
import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


// Rotas para serem navegadas
import Home from './Home';
import Resultadotextarea from './Resultadotextarea';
import Tarefa from './Tarefa';
import Exemplosegundos from './Exemplosegundos';

function Links() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/textarea">Exemplo: Textarea</Link></li>
                        <li><Link to="/tarefa">Exemplo: Tarefa</Link></li>
                        <li><Link to="/segundos">Exemplo: Segundos</Link></li>
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/textarea' element={<Resultadotextarea />} />
                <Route path='/tarefa' element={<Tarefa />} />
                <Route path='/segundos' element={<Exemplosegundos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Links;