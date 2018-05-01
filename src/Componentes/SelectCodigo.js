import React from 'react'
class SelectCodigo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ' '};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      alert("Has elegido:" + event.target.value );
      this.setState({value: event.target.value});
      
    }
  
    render() {
      return (
        <form>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Codigo1">Codigo1</option>
              <option value="Codigo2">Codigo2</option>
              <option value="Codigo3">Codigo3</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default SelectCodigo