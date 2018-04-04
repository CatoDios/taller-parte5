import React, { Component } from 'react';
import {Link } from 'react-router-3'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    render() {
      return (
        <div className="vista">
        <div className="grupo">
        <h4 className="center ">Bienvenido</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="center datos">
            <div>
            <i class="material-icons">person</i>
            </div>
            <b>Nombres y Apellidos:</b>
            <div className="center">
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <Link className="waves-effect waves-light btn botonazul2 " type="submit" to={'/'+this.state.value }>CONSULTAR</Link>
            
          </div>
        </form>
        </div>
        
        </div>
      );
    }
  }
  export default Login;

    