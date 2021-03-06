import React from 'react';
import {
  TextField,
  Typography,
  MenuItem,
  Chip,
  Paper
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import classNames from 'classnames';
import { FixedSizeList } from 'react-window';
import { components } from 'react-select';

export function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} style={{ minHeight: '32px' }} />;
}

export function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

export function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

export function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

export function ValueContainer(props) {
  return (
    <div
      className={classNames(props.selectProps.classes.valueContainer, {
        [props.selectProps.classes.disabledValue]: props.isDisabled
      })}
    >
      {props.children}
    </div>
  );
}

export function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

export function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

export function MenuList(props) {
  const itemSize = 46;
  const { options, children, maxHeight, getValue } = props;

  if (!Array.isArray(children) || children.length < 6) {
    return (
      <components.MenuList {...props}>{props.children}</components.MenuList>
    );
  }

  const [value] = getValue();
  let initialOffset = options.indexOf(value) * itemSize;
  initialOffset = initialOffset < 0 ? 0 : initialOffset;

  return (
    <FixedSizeList
      height={maxHeight}
      itemCount={children.length}
      itemSize={itemSize}
      width="100%"
      useIsScrolling
      initialScrollOffset={initialOffset}
      {...props.innerProps}
    >
      {({ index, isScrolling, style }) => (
        <div style={style}>
          {isScrolling ? (
            <MenuItem component="div" style={{ fontWeight: 400 }}>
              Carregando...
            </MenuItem>
          ) : (
            children[index]
          )}
        </div>
      )}
    </FixedSizeList>
  );
}
