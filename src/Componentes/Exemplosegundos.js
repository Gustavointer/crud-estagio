import React from "react"
import reactDom from "react-dom"

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
  );

// Um Componente com Estado (stateful component)
// Além de receber dados de entrada (acessados via this.props), um componente pode manter dados do state interno
// (acessados via this.state). Quando os dados do state de um componente são alterados, o código renderizado será
// atualizado invocando o método render() novamente.

  export default Exemplosegundos;