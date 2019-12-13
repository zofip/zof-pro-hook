import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IndicatorCard from './IndicatorCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const IndicatorsForm = ({ indicators }) => {

  const classes = useStyles();

  const cards = indicators.map((indicator, index) =>
    <Grid item xs={12} sm={3} key={index}>
      <IndicatorCard indicator={indicator} />
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </div>
  );
}

export default IndicatorsForm;