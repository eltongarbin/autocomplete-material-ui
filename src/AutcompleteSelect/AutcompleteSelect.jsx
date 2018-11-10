import React from 'react';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

import {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
  Option
} from './BaseAutocompleteSelect';

const styles = (theme) => ({
  disabledValue: {
    '& p': {
      color: 'rgba(0, 0, 0, 0.38)'
    }
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: `0 ${theme.spacing.unit / 4}px ${theme.spacing.unit / 2}px ${theme
      .spacing.unit / 4}px`,
    height: '28px'
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const AutcompleteSelect = ({ classes, theme, ...rest }) => {
  const selectStyles = {
    input: (base) => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };

  return (
    <Select
      classes={classes}
      styles={selectStyles}
      components={components}
      {...rest}
    />
  );
};

export default withStyles(styles, { withTheme: true })(AutcompleteSelect);
