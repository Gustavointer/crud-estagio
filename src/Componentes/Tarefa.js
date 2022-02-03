import React from 'react'
import ReactDOM from 'react-dom'

class Tarefa extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>Tutorial de uma aplicação de tarefas</h3>
          <p>Usando props e state, podemos montar uma pequena aplicação de Lista de Tarefas.</p>
          <p>Este exemplo usa state para manter a lista atual de itens, bem como o texto que o usuário inseriu.</p>
          <p>Apesar de parecer que os event handlers são renderizados inline, eles serão coletados e implementados
            usando a delegação de eventos (event delegation).
          </p>
          <p>Agora você verá o código da aplicação que foi feito</p><br></br>
          <p><img src='./Imagens/parte1.jpg'/></p>
          <p><img src='./Imagens/parte2.jpg'/></p>
          <p>Agora você verá o resultado da aplicação logo abaixo</p>
          <h3>Tarefas</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              O que precisa ser feito?
            </label><br></br>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            /><br></br>
            <button>
              Adicionar #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  

{/* 
 */}
export default Tarefa;