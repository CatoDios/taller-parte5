import React from 'react'

class FiltroFecha extends React.Component {
    addNewFiltro(e) {
        e.preventDefault();
        var del = this.del.value;
        var al = this.al.value;
        var fechas = {del: del, al:al}
        this.props.Fechas(fechas);
    
    }  
     render() {
        return(
          <form className="margen" onSubmit={(e) => this.addNewFiltro(e)}>
          <div className = "SplitPane">
           <div >
            <label>Del:</label>
            <input ref={ ( input ) => this.del = input } type="date" name="Del"/>
            <label>Al:</label>
            <input ref={ ( input ) => this.al = input } type="date" name="Al" />
           </div>
           <div >
            <div>
            <button  className="waves-effect waves-light btn botonazul2 "type="submit">Buscar<i className="large material-icons left">search</i></button>
            </div>
           </div>
          </div>
          </form>
        
        )
      }
    
  }
  export default FiltroFecha;