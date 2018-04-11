import React from 'react'

class Imprimir extends React.Component {
  
  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }

  render() {

    return (
      <div>
        <button  onClick={() => window.print()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
      
      </div>

    )
  }
}
export default Imprimir;
