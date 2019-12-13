import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardTns from '../common/CardTns';


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

const ComponentGrid = ({cardsComponent}) => {

  const classes = useStyles();
  const cards = cardsComponent.map((component, index) =>
    <Grid item xs={12} sm={6} key={index}>
      <CardTns cardComponent={component} />
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

export default ComponentGrid;
