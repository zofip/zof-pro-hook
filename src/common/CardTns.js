import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardTns = ({cardComponent, handleOnClick}) => {
  return (
    <Card key={cardComponent.id}>
      <CardActionArea onClick={() => handleOnClick(cardComponent)}>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {cardComponent.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default CardTns;