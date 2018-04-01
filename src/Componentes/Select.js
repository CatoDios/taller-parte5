import React from 'react'
class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'codigo'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Nombre">Nombre</option>
              <option value="Dependencia">Dependencia</option>
              <option value="Codigo">Codigo</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default Select