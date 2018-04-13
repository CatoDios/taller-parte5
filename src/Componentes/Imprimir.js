import React from 'react'
const jsPDF = require('jspdf');

class Imprimir extends React.Component {
  
  componentDidMount() {
    console.log('PrintThisComponent mounted!')
  }
  Imprimir(){
   var doc = new jsPDF({
   orientation: 'landscape',
   unit: 'in',
   format: [4, 2]
   })

   doc.text('Hello world!', 1, 1)
   doc.save('two-by-four.pdf')

   //CREAR UN PDF A PARTIR DE UN DIV DEL HTML

    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.fromHTML(window.document.getElementById('historial'), 10, 10,{'width': 180});
    pdf.save('test.pdf');
    
   }


  render() {

    return (
      <div>
      <div>
        <button  onClick={() => window.print()} className=" waves-effect waves-light btn imprimir ">Imprimir<i className="large material-icons left">local_printshop</i></button>
      </div>
      <button onClick={() => this.Imprimir()}>IMPRIMIR</button>

      <div id="historial">
        <h1>Hola Mundo</h1>
      </div>
      </div>

    )
  }
}
export default Imprimir;
