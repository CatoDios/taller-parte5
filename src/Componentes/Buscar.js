import React from 'react'

class Buscar extends React.Component {
  addNewFiltro(e) {
    e.preventDefault();
    var codigo = this.codigo.value;
    this.props.codigo( codigo);
}  
 
  render() {
    return(
      <form onSubmit={(e) => this.addNewFiltro(e)}>
        <label>Codigo:</label>
        <input ref={ ( input ) => this.codigo = input } type="text" placeholder="Codigo" />
        <label>Concepto:</label>
        <input ref={ ( input ) => this.concepto = input } type="text" placeholder="Concepto" />
        <label></label>
        <button type="submit">Buscar</button>
      </form>
    )
  }
}

export default Buscar