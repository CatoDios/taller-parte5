import React from 'react'

class Importe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.CalcularImporte = this.CalcularImporte.bind(this);
      }
     CalcularImporte(){
        let pagos= this.props.pagos;
        let importe= 0;
        for (var indice in pagos) {
            importe = importe +pagos[indice].importe;
        }
        this.setState({ value: importe });
     }
     render() {
      return(
        <div className="row ">
          <button className="importe waves-effect waves-light btn col-xs-2" onClick={this.CalcularImporte}>Importe<i className="large material-icons left">attach_money</i></button>
          <input value={this.state.value} type="text" placeholder="Importe" className="derecha col-xs-2"/>
        </div>
      )
    }   
}
export default Importe;
