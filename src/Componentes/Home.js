import React from 'react'
import './Home.css'
import {Routes, Route, Link} from 'react-router-dom'
import Tarefa from './Tarefa.js'

const Home = () => {
    return(
        <div className='home'>
            <header className='header'>
                <div>
                    <div>
                        <Link to="/">React Tutorial</Link>
                    </div>
                    <nav className="navbar navbar-light">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/tarefa" component={Tarefa} />
                    </Routes>
                </div>
            </header>
            <div className='div'>
                <h1>React</h1>
                <p>Uma biblioteca JavaScript para criar interfaces de usuário</p>
            </div>
                <div className='react'>
                    <h4>O que é React js?</h4>
                    <p>
                        O React é uma biblioteca muito popular do JavaScript e é usada para construir uma
                        interface de usuário (IU) para as nossas aplicações. Ela oferece uma resposta excelente
                        para o usuário adicionar comandos usando um novo método de renderizar sites.
                        React faz com que a criação de UIs interativas seja uma tarefa fácil.
                        Crie views simples para cada estado na sua aplicação, e o React irá atualizar
                        e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
                        Views declarativas fazem com que seu código seja mais previsível e simples de depurar.
                    </p>
                </div>
                <div className='componentes'>
                    <h4>Baseado em componentes</h4>
                    <p>
                        Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas.
                        Como a lógica do componente é escrita em JavaScript e não em templates,
                        você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e
                        ainda manter o estado fora do DOM.
                    </p>
                </div>
        </div>
    )
}
export default Home;