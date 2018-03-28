import React from 'react'

class AlumnoRow extends React.Component {

  render() {
    return(
    <tr>
			<td className="td">{this.props.idPago}</td>
			<td className="td">{this.props.moneda}</td>
      <td className="td">{this.props.concepto}</td>
			<td className="td">{this.props.numeroVoucher}</td>
			<td className="td">{this.props.importe}</td>
      <td className="td">{this.props.fecha}</td>
			<td className="td">{this.props.idAlumno}</td>
      <td className="td">{this.props.dependencia}</td>
	  </tr>
    )
  }
}

export default AlumnoRow