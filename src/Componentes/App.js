import React from 'react'
import AlumnoList from './Alumno-list'
import TableHeader from './Table-Header'
import Buscar from './Buscar'
import Select from './Select'
import '../App.css';

class App extends React.Component {
  
   constructor(props) {
    super(props)
    this.state = { alumnos: [] }
    this.codigo='';
    this.FiltrarCodigo = this.FiltrarCodigo.bind(this);
  }
 
  componentWillMount() {
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listarPagos')
      .then((response) => {
        return response.json()
      })
      .then((alumnos) => {
        this.setState({ alumnos: alumnos })
      })
  }
  

  render() {
    if (this.state.alumnos.length > 0) {
      return (
        <div className="container-fluid">
          <h3>Estado de pagos</h3>
          <hr/>
          <p><Select/></p>
          <Buscar codigo = {this.FiltrarCodigo} />
          <br/>
          <br/>
        <table className="table">
            <TableHeader/>
            <AlumnoList listado={this.state.alumnos} />
        </table>
        </div>
        
      )
    } else {
      return <p className="text-center">Cargando Alumnos estado de pagos...</p>
    }
  }

  FiltrarCodigo(codigo) {
    
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/'+ codigo)
      .then((response) => {
        return response.json()
      })
      .then((alumnos) => {
        this.setState({ alumnos: alumnos })
      })

/*
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
    console.log(this.solicitudesfiltradas);*/
  }
  

}

export default App;
