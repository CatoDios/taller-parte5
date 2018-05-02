import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class SelectPrograma extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      SelectedOption:  { value: 1, label: 'SELECT' },
    }

  }
  handleChange = (selectedOption) => {
    this.setState({ SelectedOption: selectedOption,
    
    });
    
    //this.props.Opcion(selectedOption);

    //console.log(selectedOption);
  }
  render() {
  
    return (
      <span className="opcionPrograma" id={this.state.SelectedOption.value}>
      <Select       
        name="form-field-name"
        value={this.state.SelectedOption}
        onChange={this.handleChange}
        options={this.props.listado}
      ></Select>
      </span>
    );
  }
}

export default SelectPrograma;