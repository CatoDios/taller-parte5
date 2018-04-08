import React from 'react';
import NumeroList from './Numero-List'

class NumeroRecibo extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { 
        listaNumeros:[],
        numero: ''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.Buscar = this.Buscar.bind(this);
    
    }
    onChange(e) {
        this.setState({numero: e.target.value});
      }
    onSubmit=(e)=>{
    
        console.log(this.state.numero);
        var listaAgregados=[];
        listaAgregados = this.state.listaNumeros;
        listaAgregados.push(this.state.numero);
        console.log(listaAgregados);
        this.setState({
            listaNumeros: listaAgregados
          })
        e.preventDefault();
        
    }
    Buscar=(e)=>{
      this.props.Numeros(this.state.listaNumeros);
      e.preventDefault();
      
  }

    render() {
        return (
          <div>
            <div className="center datos">
              
              <div className="SplitPane row">
              <div className="SplitPane-left col-xs-4 centrar">
                <b className="recibo">N° Recibo:</b> 
              </div>
              <div className="SplitPane-center col-xs-4 centrar">
                <input type="text" value={this.state.numero} onChange={this.onChange}  />
              </div>
              <div className="SplitPane-right col-xs-4 centrar">
                <button  onClick={this.onSubmit} className="waves-effect waves-light btn boton derecha col-xs-12"><b>+</b></button>
              </div >
              </div>
              <div className="center">
              <NumeroList listado={this.state.listaNumeros}/>
              </div>
              <div className="center ">
                <button  onClick={this.Buscar} className="waves-effect waves-light btn botonazul2 " >Buscar<i className="large material-icons left">search</i></button>
              </div>
              
            </div>
          </div>
        )
    }
    
  }
  export default NumeroRecibo;