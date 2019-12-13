import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
}));


const NumberInput = ({ handleInputValueChange }) => {

  const classes = useStyles();

  return (<TextField
    className={clsx(classes.margin, classes.textField)}
    onChange={handleInputValueChange}
    InputProps={{ startAdornment: <InputAdornment position="start">#</InputAdornment>, }} />
  );
}

export default NumberInput;