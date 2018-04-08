import React from 'react'
class NumeroList extends React.Component {
    
    render() { 
     
      return (
        <p>     
        {
            this.props.listado.map((numero) => {
              return <div className="center">
                <p className="numero">{numero}</p>
            </div>
            })
          }
          
        </p>
      )
    }
  }
  export default NumeroList;