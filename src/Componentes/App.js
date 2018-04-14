import React from 'react'
import PagoList from './Pago-list'
import TableHeader from './Table-Header'
import Alumno from './Alumno'
import Importe from './Importe'
import FiltroFecha from './FiltroFecha'
import ConceptoList from './Concepto-list'
import NumeroRecibo from './NumeroRecibo'
import '../App.css';
import PropTypes from 'prop-types';
import Imprimir from './Imprimir'

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
}

const defaultProps = {
  initialPage: 1
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filtros: [],
      pagocero: [],
      pagos: [],
      name: this.props.params.name,
      pageOfItems: []
    }
    this.conceptos = []
    this.alumno = ''
    this.importe = 0;
    this.FiltrarFecha = this.FiltrarFecha.bind(this);
    this.FiltrarNumeros = this.FiltrarNumeros.bind(this);
    this.filtrarConcepto = this.filtrarConcepto.bind(this);

    this.select = [];
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentWillMount() {
    this.pageOfItems = this.pagocero;
    var nombres = this.state.name;

    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/recaudaciones/listar/' + nombres)
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        this.setState({
          pagocero: pagos,
          pagos: pagos
        })
      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/concepto/leer/' + nombres)
      .then((response) => {
        return response.json()
      })
      .then((conceptos) => {
        this.conceptos = conceptos
      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

  }


  render() {
    if (this.state.pagos.length > 0) {
      return (
        <div className="">
          <h3>Estado de pagos por alumno</h3>
          <hr />
          <div className="SplitPane row">
            <div className=" col-xs-3 margen_top">
              <Alumno alumno={this.state.pagos[0].alumno} />
            </div>
            <div className=" col-xs-9">

              <div className="SplitPane row">
                <div className=" inline col-xs-4">
                  <FiltroFecha Fechas={this.FiltrarFecha} />
                </div >
                <div className="row center-xs-4 block">
                  <h4 className=" centrar margen_top espacio">Conceptos</h4>
                  <div className="scroll center-xs ">
                    <form action="#"><ConceptoList listado={this.conceptos} /></form>
                  </div>
                </div>
                <div className="centrar col-xs-4">
                  <h4 className=" centrar margen_top">Recibo</h4>
                  <div>
                    <NumeroRecibo Numeros={this.FiltrarNumeros} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="SplitPane row center-xs">
            <div className="  center-xs-12">
              <table className=" total table ">
                <TableHeader />
                <PagoList listado={this.state.pageOfItems} />
              </table>
              <div className="margen_top"> <Paginacion items={this.state.pagocero} onChangePage={this.onChangePage} /></div>
              <div className="SplitPane">
                <div className="SplitPane-left">
                  <Importe importe={this.CalcularImporte()} />
                </div>
                <div className="SplitPane-right">
                  <Imprimir listado={this.state.pagocero} alumno={this.state.pagos[0].alumno} importe = {this.CalcularImporte()}/>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    } else {
      return <p className="text-center">Cargando Estado de pagos de alumno</p>
    }
  }
  CalcularImporte() {
    let pagos = this.state.pagocero;
    let importe = 0;
    for (var indice in pagos) {
      importe = importe + pagos[indice].importe;
    }
    return importe;
  }

  FiltrarFecha(Fechas) {
    var filtrado = [];
    console.log(Fechas.del);
    console.log(Fechas.al);
    var del = new String(Fechas.del);
    var al = new String(Fechas.al);
    var nombres = this.state.name;
    fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/recaudaciones/listar/' + nombres + '/' + del + '/' + al)
      .then((response) => {
        return response.json()
      })
      .then((pagos) => {
        if (pagos.length == 0) {
          alert("No hay registros de pago en este rango de fechas");
          //this.setState({pagocero: []})
          filtrado = this.state.pagos;
          console.log(filtrado);
        }
        else {
          filtrado = pagos;
          console.log(filtrado);

        }


        this.filtrarConcepto(filtrado);


      })
      .catch(error => {
        // si hay algún error lo mostramos en consola
        console.error(error)
      });

  }

  FiltrarNumeros = (listaNumeros) => {
    console.log("llego lista:")
    console.log(listaNumeros);
    this.setState({
      filtros: listaNumeros
    })

    /* 
    
    var listaNumeros_seleccionados = listaNumeros;
    var arrayfiltrado=[];
    console.log(listaNumeros_seleccionados);


    for(let i=0;i<listaNumeros_seleccionados.length;i++){
      var numeroactual=listaNumeros_seleccionados[i];
      for(let j=0;j<this.state.pagos.length;j++){
          var numero_seleccionado=this.state.pagos[j].numero;
          if(numero_seleccionado==numeroactual){
            arrayfiltrado.push(this.state.pagos[j]);
          }

      }
    }
    
    console.log(arrayfiltrado);
   
    if(listaNumeros_seleccionados.length==0){
      alert("Ingrese uno o mas numeros de recibos")
      
    }
    else{ 
      if(arrayfiltrado.length == 0){
        alert("No hay registro con los numeros de voucher ingresados");
      }
      else{
        console.log(arrayfiltrado);
        this.setState({
        pagocero : arrayfiltrado
          })
      }
    }
    
    
    
    */
  }


  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }


  filtrarConcepto = (filtrado) => {
    console.log(filtrado);
    var idconcepto = [];
    var checkbox_seleccionados = [];
    var check = [];
    var seleccionados = 0;
    var arrayfiltrado = [];
    check = document.getElementsByClassName("clase_concepto");


    for (var item of check) {
      if (item.checked) {
        checkbox_seleccionados.push(item.name);
      }
    }

    for (let i = 0; i < this.conceptos.length; i++) {
      idconcepto.push(this.conceptos[i].idConcepto);
    }



    console.log(checkbox_seleccionados);




    //var arrayflitrado=this.state.pagos.filter(pago => pago.concepto.idConcepto===5);
    if (checkbox_seleccionados.length == 0) {

      arrayfiltrado = filtrado;
    }
    else {
      for (let i = 0; i < checkbox_seleccionados.length; i++) {
        var conceptoactual = checkbox_seleccionados[i];
        for (let j = 0; j < filtrado.length; j++) {
          var concepto_seleccionado = filtrado[j].concepto.idConcepto;
          if (concepto_seleccionado == conceptoactual) {
            arrayfiltrado.push(filtrado[j]);
          }

        }
      }

      if (arrayfiltrado.length == 0) {
        arrayfiltrado = filtrado;
      }
      console.log(arrayfiltrado);



    }







    var numero_codigos = this.state.filtros;
    console.log(numero_codigos);
    var filtrofinal = [];

    var listaNumeros_seleccionados = numero_codigos;

    console.log(listaNumeros_seleccionados);




    console.log(arrayfiltrado);

    if (listaNumeros_seleccionados.length == 0) {
      alert("Ingrese uno o mas numeros de recibos")
      this.setState({
        pagocero: arrayfiltrado
      })


    }
    else {
      if (arrayfiltrado.length == 0) {
        alert("No hay registro con los numeros de voucher ingresados");
        this.setState({
          pagocero: arrayfiltrado
        })
      }
      else {

        for (let i = 0; i < listaNumeros_seleccionados.length; i++) {
          var numeroactual = listaNumeros_seleccionados[i];
          for (let j = 0; j < arrayfiltrado.length; j++) {
            var numero_seleccionado = arrayfiltrado[j].numero;
            if (numero_seleccionado == numeroactual) {
              filtrofinal.push(arrayfiltrado[j]);
            }

          }
        }

        if (filtrofinal.length == 0) {
          this.setState({
            pagocero: arrayfiltrado
          })
        } else {
          this.setState({
            pagocero: filtrofinal
          })
        }


        console.log(arrayfiltrado);

      }
    }



  }






  /*
    FiltrarCodigo(codigo) {
      
      fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/'+ codigo)
        .then((response) => {
          return response.json()
        })
        .then((pagos) => {
          this.setState({ pagos: pagos })
        })
  
  
      let id = codigo;
      var alumnosfiltrados = this.state.alumnos.filter((alumno) => alumno.alumno.idAlumno === id)
      console.log(alumnosfiltrados);
      this.setState({ alumnos: alumnosfiltrados })
      
  
  
      let id = this.codigo;
      let greaterTen = [];
  
      for (let i = 0; i<this.state.alumnos.length; i++) {
        var currentNumber = this.state.alumnos[i];
        if (currentNumber.alumno.idAlumno === id) {
         greaterTen.push(currentNumber)
        }
      }
      this.solicitudesfiltradas = greaterTen;
      console.log(this.solicitudesfiltradas);
    }*/





}

class Paginacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {

    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }
  setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    //var pages = _.range(startPage, endPage + 1);
    var pages = [];
    for (let i = 0; i < endPage; i++) {
      pages.push(startPage + i);
    }

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    return (
      <ul className="pagination row center-xs">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}><i class="material-icons">chevron_left</i></a>
        </li>
        {pager.pages.map((page, index) =>
          <li key={index + 28} className={pager.currentPage === page ? 'active' : ''}>
            <a onClick={() => this.setPage(page)}>{page}</a>
          </li>
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage + 1)}><i class="material-icons">chevron_right</i></a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    );
  }








  /*
    FiltrarCodigo(codigo) {
      
      fetch('https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/'+ codigo)
        .then((response) => {
          return response.json()
        })
        .then((pagos) => {
          this.setState({ pagos: pagos })
        })
  
  
      let id = codigo;
      var alumnosfiltrados = this.state.alumnos.filter((alumno) => alumno.alumno.idAlumno === id)
      console.log(alumnosfiltrados);
      this.setState({ alumnos: alumnosfiltrados })
      
  
  
      let id = this.codigo;
      let greaterTen = [];
  
      for (let i = 0; i<this.state.alumnos.length; i++) {
        var currentNumber = this.state.alumnos[i];
        if (currentNumber.alumno.idAlumno === id) {
         greaterTen.push(currentNumber)
        }
      }
      this.solicitudesfiltradas = greaterTen;
      console.log(this.solicitudesfiltradas);
    }*/


}
Paginacion.propTypes = propTypes;
Paginacion.defaultProps = defaultProps;

export default App;
