import React from 'react'
import PagoList from './Pago-list'
import TableHeader from './Table-Header'
import Alumno from './Alumno'
import Importe from './Importe'
import FiltroFecha from './FiltroFecha'
import ConceptoList from './Concepto-list'
import '../App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { pagos: [] }
    this.conceptos = []
    this.alumno=''
    this.importe=0;
    this.FiltrarFecha= this.FiltrarFecha.bind(this);
  }
  componentDidMount() {
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/Juan/Eneque/Pisfil')
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        this.setState({ pagos: pagos })
      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });
      fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/concepto/leer/Juan/Eneque/Pisfil')
      .then((response) => {
        return response.json()
      })
      .then((conceptos) => {
        this.conceptos = conceptos
      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });
  }
  

  render() {
    if (this.state.pagos.length > 0) {
      return (
        <div className="container-fluid">
          <h3>Estado de pagos por alumno</h3>
          <hr/>
          <Alumno alumno = {this.state.pagos[0].alumno}/>
          <hr/>
          <div className="SplitPane">
            <div className="SplitPane-left">
              <h2>Conceptos</h2>
              <ul><ConceptoList listado={this.conceptos}/></ul>
           </div>
            <div className="SplitPane-right">
              <FiltroFecha Fechas={this.FiltrarFecha} />
            </div>
          </div>
          <table className="table">
            <TableHeader/>
            <PagoList listado={this.state.pagos} />
          </table>
          <div className="SplitPane">
            <div className="SplitPane-right">
            <Importe pagos={this.state.pagos}/>
            </div>
            <div clasName="SplitPane-left">
            <button className="imprimir">Imprimir</button>
            </div>
          </div>

        </div>
      )
    } else {
      return <p className="text-center">Cargando Estado de pagos de alumno</p>
    }
  }
 
  FiltrarFecha(Fechas){
    console.log(Fechas.del);
    console.log(Fechas.al);
    var del = new String(Fechas.del);
    var al = new String(Fechas.al);

    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/Juan/Eneque/Pisfil/'+del+'/'+al)
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        this.setState({ pagos: pagos })
      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });
  }
/*
  FiltrarCodigo(codigo) {
    
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/'+ codigo)
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        this.setState({ pagos: pagos })
      })


    let id = codigo;
    var alumnosfiltrados = this.state.alumnos.filter((alumno) => alumno.alumno.idAlumno === id)
    console.log(alumnosfiltrados);
    this.setState({ alumnos: alumnosfiltrados })
    


    let id = this.codigo;
    let greaterTen = [];

    for (let i = 0; i<this.state.alumnos.length; i++) {
      var currentNumber = this.state.alumnos[i];
      if (currentNumber.alumno.idAlumno === id) {
       greaterTen.push(currentNumber)
      }
    }
    this.solicitudesfiltradas = greaterTen;
    console.log(this.solicitudesfiltradas);
  }*/
  

}

export default App;
