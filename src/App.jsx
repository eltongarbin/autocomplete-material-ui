import React, { Component } from 'react';
import { CssBaseline, Divider, Grid } from '@material-ui/core';
import AutcompleteSelect from './AutcompleteSelect/AutcompleteSelect';

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label
}));

export class App extends Component {
  state = {
    single: null,
    multi: null
  };

  handleChange = (name) => (value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <CssBaseline />
        <AutcompleteSelect
          options={suggestions}
          value={this.state.single}
          onChange={this.handleChange('single')}
          placeholder="Search a country (start with a)"
        />
        <div style={{ marginTop: 20 }} />
        <AutcompleteSelect
          textFieldProps={{
            label: 'Label',
            InputLabelProps: {
              shrink: true
            },
            multi: true
          }}
          options={suggestions}
          value={this.state.multi}
          onChange={this.handleChange('multi')}
          placeholder="Select multiple countries"
          isMulti
        />
      </div>
    );
  }
}

export default App;
