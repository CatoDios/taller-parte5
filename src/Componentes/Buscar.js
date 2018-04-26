import React from 'react'

class Buscar extends React.Component {
  addNewFiltro(e) {
    e.preventDefault();
    var nombre = this.nombre.value.toUpperCase();
    var codigo = this.codigo.value;
    if(!nombre){
      alert("ingrese un nombre para buscar");
    }else{
      var busqueda = {nombre: nombre, codigo :codigo}
      this.props.Busqueda( busqueda);
    }
    
}  
 
  render() {
    return(
      <form onSubmit={(e) => this.addNewFiltro(e)}>
        <h5>Nombre:</h5>
        <input ref={ ( input ) => this.nombre = input } type="text" placeholder="Nombre" />
        <h5>Codigo:</h5>
        <input ref={ ( input ) => this.codigo= input } type="text" placeholder="Codigo" />
        <button  className="waves-effect waves-light btn-large botonazul2 center"type="submit">Buscar<i className="large material-icons left">search</i></button>
      </form>
    )
  }
}

export default Buscar