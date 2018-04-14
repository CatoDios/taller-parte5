import React from 'react'

var jsPDF = require('jspdf');
require('jspdf-autotable');

class Imprimir extends React.Component {
  
  componentDidMount() {

    console.log('PrintThisComponent mounted!')

  }
  Imprimir(){
    console.log(this.props.listado);

    var alumno = this.props.alumno;
    var nombres = alumno.nomApe;
    var codigo= alumno.codigo;
    var importe = this.props.importe;
  

    var listadopagos = this.props.listado;
    var listado = [];


    for (let i = 0; i<listadopagos.length; i++) {
      var pago = [listadopagos[i].idRec,listadopagos[i].moneda, listadopagos[i].concepto.a+'-'+listadopagos[i].concepto.b,listadopagos[i].numero,
      listadopagos[i].fecha,listadopagos[i].alumno.idAlum,listadopagos[i].alumno.facultad.nombre,listadopagos[i].importe]
      listado.push(pago);
    }
    console.log(listado);
    /*
    var pdf = new jsPDF();
    pdf.text(20,20,"Estado de Pagos");
    pdf.text(20,40,listado);
    pdf.save('mipdf.pdf');

 
    //CREAR UN PDF A PARTIR DE UN DIV DEL HTMl
     const pdf = new jsPDF('p', 'mm', 'a4');
     pdf.fromHTML(window.document.getElementById('historial'), 10, 10,{'width': 180});
     pdf.save('test.pdf');
     */


    var columns = ["IDPAGO", "MONEDA", "CONCEPTO","NUMERORECIBO","FECHA","IDALUMNO","DEPENDENCIA","IMPORTE"];
    
    // Only pt supported (not mm or in)
    var data = "Hola";
    var doc = new jsPDF('p', 'pt');
    doc.autoTable(columns, listado, {
      styles: {
          cellPadding: 5, // a number, array or object (see margin below)
          fontSize: 8,
          font: "helvetica", // helvetica, times, courier
          lineColor: 200,
          lineWidth: 0,
          fontStyle: 'normal', // normal, bold, italic, bolditalic
          overflow: 'ellipsize', // visible, hidden, ellipsize or linebreak
          fillColor: false, // false for transparent or a color as described below
          textColor: 0,
          halign: 'center', // left, center, right
          valign: 'middle', // top, middle, bottom
          columnWidth: 'auto' // 'auto', 'wrap' or a number
      },
      headerStyles: {fillColor: [26, 82, 118],
      textColor:255,
      fontStyle:'bold'},
      margin: {top: 100},
      addPageContent: function(data) {
        doc.text("Estado de pagos", 40, 30);
        doc.text("Alumno : "+nombres, 40, 50);
        doc.text("Codigo: "+codigo,40,70);
        doc.text("Importe: "+importe,40,90);

      }
  });
    doc.save('EstadoPagosAlumno.pdf');
    }
 //<button  onClick={() => window.print()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
  render() {

    return (
      <div>
        <button  onClick={() => this.Imprimir()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
      </div>

    )
  }
}
export default Imprimir;
