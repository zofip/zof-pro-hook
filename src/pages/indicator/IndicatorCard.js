import React, { useState, useContext } from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ViewModule from '@material-ui/icons/ViewModule';
import CheckCircle from '@material-ui/icons/CheckCircle';

import IndicatorContext from './IndicatorContext';
import ValidateInput from './ValidateInput';
import { ADD, REMOVE, PERCENT, EMPTY } from '../../utils/constants';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        color: '#009BB0',
        background: '#D9D6D0'
    },
    add: {
        marginLeft: 'auto'
    }
}));


const IndicatorCard = ({ indicator }) => {

    const dispatch = useContext(IndicatorContext);

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [add, setAdd] = useState(null);
    const [value, setValue] = useState();

    const handleInputValueChange = newValue => {
        if (newValue.target) {
            setValue(newValue.target.value);
        } else {
            setValue(newValue);
        }
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleAddClick = () => {
        if (value) {
            if (indicator.metric.unit === PERCENT) {
                setValue(40);
                setAdd(true);
                dispatch({
                    type: ADD,
                    indicator: indicator,
                    value: 40
                });
            } else {
                setAdd(true);
                dispatch({
                    type: ADD,
                    indicator: indicator,
                    value: value
                });
            }
        }
    }

    const handleRemoveClick = () => {
        setAdd(false);
        dispatch({
            type: REMOVE,
            event: indicator.metric.name
        });
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={add ? classes.avatar : EMPTY}>
                        {add ? <CheckCircle /> : <ViewModule />}
                    </Avatar>
                }
                title={indicator.metric.name}
                subheader={indicator.metric.type}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    kpi: {indicator.kpi}
                </Typography>
                <ValidateInput unit={indicator.metric.unit} handleInputValueChange={handleInputValueChange} />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <ExpandMoreIcon />
                </IconButton>
                {add === false || add === null ?
                    <IconButton className={classes.add} aria-label="add" color="secondary" onClick={handleAddClick}>
                        <AddIcon />
                    </IconButton>
                    :
                    <IconButton className={classes.add} aria-label="remove" color="default" onClick={handleRemoveClick}>
                        <RemoveIcon />
                    </IconButton>
                }
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography variant="body2" color="textSecondary">{indicator.metric.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default IndicatorCard;