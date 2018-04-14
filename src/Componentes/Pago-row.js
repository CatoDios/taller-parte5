import React from 'react'

class PagoRow extends React.Component {

  render() {
    return(
    <tr>
			<td className="td">{this.props.pago.idRec}</td>
			<td className="td">{this.props.pago.moneda}</td>
      <td className="td">{this.props.pago.concepto.a + ' '+ this.props.pago.concepto.b}</td>
			<td className="td">{this.props.pago.numero}</td>	
      <td className="td">{this.props.pago.fecha}</td>
			<td className="td">{this.props.pago.alumno.idAlum}</td>
      <td className="td">{this.props.pago.alumno.facultad.nombre}</td>
      <td className="td">{this.props.pago.importe}</td>
	  </tr>
    )
  }
}

export default PagoRow;