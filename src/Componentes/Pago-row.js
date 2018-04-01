import React from 'react'

class PagoRow extends React.Component {

  render() {
    return(
    <tr>
			<td className="td">{this.props.pago.idPago}</td>
			<td className="td">{this.props.pago.moneda}</td>
      <td className="td">{this.props.pago.concepto.a + ' '+ this.props.pago.concepto.b}</td>
			<td className="td">{this.props.pago.numeroVoucher}</td>
			<td className="td">{this.props.pago.importe}</td>
      <td className="td">{this.props.pago.fecha}</td>
			<td className="td">{this.props.pago.alumno.idAlumno}</td>
      <td className="td">{this.props.pago.alumno.facultad.nombre}</td>
	  </tr>
    )
  }
}

export default PagoRow;