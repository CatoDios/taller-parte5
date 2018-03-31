import React from 'react'
import PagoList from './Pago-list'
import TableHeader from './Table-Header'
import Alumno from './Alumno'
import ConceptoList from './Concepto-list'
import '../App.css';

class App extends React.Component {
  
   constructor(props) {
    super(props)
    this.state = { pagos: [] }
    this.conceptos = []
    this.alumno=''
  }
 
  componentWillMount() {
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/Juan/Eneque/Pisfil')
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        this.setState({ pagos: pagos })
      })
      fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/concepto/leer/Juan/Eneque/Pisfil')
      .then((response) => {
        return response.json()
      })
      .then((conceptos) => {
        this.conceptos = conceptos
      })
  }
  

  render() {
    if (this.state.pagos.length > 0) {
      return (
        <div className="container-fluid">
          <h3>Estado de pagos por alumno</h3>
          <hr/>
          <Alumno alumno = {this.state.pagos[0].alumno}/>
          <hr/>
          <h2>Conceptos</h2>
          <ul><ConceptoList listado={this.conceptos}/></ul>
          <br/>
        <table className="table">
            <TableHeader/>
            <PagoList listado={this.state.pagos} />
        </table>
        </div>
      )
    } else {
      return <p className="text-center">Cargando Estado de pagos de alumno</p>
    }
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
