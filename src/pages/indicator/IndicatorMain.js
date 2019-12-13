import React, { useState, useEffect, useReducer } from 'react';
import useCombinedReducers from 'use-combined-reducers';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { fetchComponentsById } from '../../services/components';
import fetchPostIndicator from '../../services/indicator';

import IndicatorsForm from './IndicatorsForm';
import DialogTns from '../../common/DialogTns';

import IndicatorContext from './IndicatorContext';
import addedIndicatorsReducer from './reducers/addedIndicatorReducer';
import {
    MESSAGE_INDICATORS_SAVED, MESSAGE_NO_INDICATORS_TO_SAVE,
    INFORMATION, WARNING
} from '../../utils/constants';

const IndicatorMain = props => {

    const [indicators, setIndicators] = useState([]);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const [componentName, setComponentName] = useState();

    const [state, dispatch] = useCombinedReducers({
        addedIndicators: useReducer(addedIndicatorsReducer, [])
    });
    const { addedIndicators } = state;

    useEffect(() => {
        const componentId = props.match.params.componentId;
        setComponentName(props.location.state.componentName);
        fetchComponentsById(componentId).then(result => {
            setIndicators(result);
        });
    }, [props]);

    const handleOnClickSave = () => {
        const projectName = props.location.state.projectName;
        if (addedIndicators.length > 0) {
            addedIndicators.map(newIndicator => fetchPostIndicator(projectName, componentName, newIndicator));
            setTitle(INFORMATION);
            setMessage(MESSAGE_INDICATORS_SAVED);
        } else {
            setTitle(WARNING);
            setMessage(MESSAGE_NO_INDICATORS_TO_SAVE);
        }
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <IndicatorContext.Provider value={dispatch}>
            <Container fixed>
                <Box my={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1" gutterBottom>Indicators {componentName}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <IndicatorsForm indicators={indicators} ></IndicatorsForm>
                        </Grid>
                        <Grid item xs={12}>
                            <ButtonGroup fullWidth aria-label="full width outlined button group">
                                <Button onClick={() => props.history.goBack()}>Back</Button>
                                <Button onClick={handleOnClickSave}>Save</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <DialogTns title={title} message={message} open={open} handleClose={handleClose}></DialogTns>
                </Box>
            </Container>
        </IndicatorContext.Provider>
    );
}

export default IndicatorMain;