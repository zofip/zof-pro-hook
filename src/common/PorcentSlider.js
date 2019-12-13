import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import SvgIcon from '@material-ui/core/SvgIcon';
import { EMPTY } from '../utils/constants';

const useStyles = makeStyles({
    root: {
        width: 250,
        paddingTop: 16
    },
    input: {
        width: 42,
    }
});

const PorcentSlider = ({ handleInputValueChange }) => {

    const classes = useStyles();
    const [value, setValue] = useState(40);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        handleInputValueChange(newValue);
    };

    const handleInputChange = event => {
        let inputValue = event.target.value ? Number(event.target.value) : EMPTY;
        setValue(inputValue);
        handleInputValueChange(inputValue);
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        }
        if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <SvgIcon>
                        <svg color="#009BB0" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.501 3.5l-15 15.001 1.996 1.996 15-15z" /><circle opacity=".3" cx="7" cy="7" r="1" /><circle opacity=".3" cx="17" cy="17" r="1" /><path d="M17.003 14a3 3 0 1 1-.006 6 3 3 0 0 1 .006-6zM17 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7.003 4a3 3 0 1 1-.006 6 3 3 0 0 1 .006-6zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
                    </SvgIcon>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default PorcentSlider;