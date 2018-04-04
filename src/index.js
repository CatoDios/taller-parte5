import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
import Login from './Componentes/Login';
import NameForm from './Componentes/NameForm';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';

class Index extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { 
        pagos: [],
        name: 'alex%20rojas'
       }
      this.FiltrarNombre= this.FiltrarNombre.bind(this);
    }
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <Login Nombre={this.FiltrarNombre} />}
                path="/">
            
            </Route>
            <Route path="/:name" component={App}></Route>
          </Router>
            )
      }
      FiltrarNombre(nombre){
        this.setState({ name: nombre});
      }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();