import React from 'react'


class Alumno extends React.Component {
  render() {
      return (
        <div>
        <h2>Datos personales</h2>
        <div><label>Nombre:</label>{this.props.alumno.nombre}</div>
        <div><label>Apellidos:</label>{this.props.alumno.apellido_pat} {this.props.alumno.apellido_mat}</div>
        <div><label>Codigo:</label>{this.props.alumno.idAlumno}</div>
        </div>

      )
  }
}

export default Alumno;
