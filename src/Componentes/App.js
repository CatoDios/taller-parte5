import React from 'react'
import AlumnoList from './Alumno-list'
import TableHeader from './Table-Header'
import '../App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { alumnos: [] }
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
          <div>
          <label>Codigo:</label>
          <input type="text"  placeholder="CodigoAlumno"/>
          </div>
          <div>
          <label>Concepto:</label>
          <input type="text"  placeholder="Concepto"/>
          </div>
          <div>
          <button>Buscar</button>
          </div>
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

}

export default App;
