import React from 'react'
import AlumnoRow from './Alumno-row'

class AlumnoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((alumno) => {
              return <AlumnoRow  idPago={ alumno.idPago }
                                  moneda={ alumno.moneda }
                                  numeroVoucher={ alumno.numeroVoucher }
                                  importe={ alumno.importe }
                                  concepto={ alumno.concepto.a} />
            })
          }
        </tbody>
    )
  }
}

export default AlumnoList