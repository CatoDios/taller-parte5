import React from 'react'

class Imprimir extends React.Component {
  
  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }

  render() {

    return (
      <div>
        <button  onClick={() => window.print()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>

        <p>Click above button opens print preview with these words on page</p>
      </div>

    )
  }
}
export default Imprimir;