import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Chance } from 'chance';

import AutocompleteSelect from './AutocompleteSelect';

export class App extends Component {
  state = {
    single: null,
    multi: null,
    options: []
  };

  componentDidMount() {
    const options = [];
    for (let index = 0; index < 10000; index++) {
      options.push({ label: new Chance().name(), value: index });
    }

    this.setState({ options });
  }

  handleChange = (name) => (value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <CssBaseline />
        <AutocompleteSelect
          options={this.state.options}
          value={this.state.single}
          onChange={this.handleChange('single')}
        />
        <div style={{ marginTop: 20 }} />
        <AutocompleteSelect
          textFieldProps={{
            label: 'Label',
            InputLabelProps: {
              shrink: true
            }
          }}
          options={this.state.options}
          value={this.state.multi}
          onChange={this.handleChange('multi')}
          isMulti
        />
      </div>
    );
  }
}

export default App;
