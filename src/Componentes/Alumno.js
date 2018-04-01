import React from 'react'


class Alumno extends React.Component {
  render() {
      return (
        <div>
        <h2>Datos personales</h2>
        <div><b>Nombre y Apellidos:</b>{this.props.alumno.nombre 
         + ' '+ this.props.alumno.apellido_pat +' '+ this.props.alumno.apellido_mat}</div>
        <div><b>Código:</b>{this.props.alumno.idAlumno}</div>
        </div>

      )
  }
}

export default Alumno;
