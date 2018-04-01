import React from 'react'
import PagoRow from './Pago-row'

class PagoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((pago) => {
              return <PagoRow key={pago.toString()} 
                                  pago={ pago} />
            })
          }
        </tbody>
    )
  }
}

export default PagoList