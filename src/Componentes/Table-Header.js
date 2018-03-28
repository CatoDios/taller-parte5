import React from 'react'

class TableHeader extends React.Component {

  render() {
    return(
    <thead>
			<tr>
                <th className="th">IdPago</th>
                <th className="th">Moneda</th>
                <th className="th">Numero de Voucher</th>
                <th className="th">Importe</th>
                <th className="th">Concepto</th>
            </tr>
	</thead>
    )
  }
}

export default TableHeader