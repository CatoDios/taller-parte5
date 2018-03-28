import React from 'react'
import AlumnoRow from './Alumno-row'

class AlumnoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((alumno) => {
              return <AlumnoRow key={alumno.toString()} idPago={ alumno.idPago }
                                  moneda={ alumno.moneda }
                                  concepto={ alumno.concepto.a + '-'+alumno.concepto.b}
                                  numeroVoucher={ alumno.numeroVoucher }
                                  importe={ alumno.importe }
                                  fecha={alumno.fecha}
                                  idAlumno={alumno.alumno.idAlumno}
                                  dependencia={alumno.alumno.facultad.nombre}                                
                                  />
            })
          }
        </tbody>
    )
  }
}

export default AlumnoList