import React from 'react'

class TableHeader extends React.Component {

  render() {
    return(
    <thead>
			<tr>
                <th className="th">IDPAGO</th>
                <th className="th">MONEDA</th>
                <th className="th">CONCEPTO</th>
                <th className="th">NUMEROVOUCHER</th>
                <th className="th">IMPORTE</th>
                <th className="th">FECHA</th>
                <th className="th">IDALUMNO</th>
                <th className="th">DEPENDENCIA</th>
            </tr>
	</thead>
    )
  }
}

export default TableHeader