import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Select from 'react-select';

const AutocompleteTns = ({ title, placeholder, options, handleChange, selectOption, isDisabled }) => {
    return (
        <Box my={2}>
            <Typography variant="h6" component="h6" gutterBottom>
                {title}
            </Typography>
            <Select
                placeholder={placeholder}
                value={selectOption}
                options={options}
                onChange={handleChange}
                isDisabled={isDisabled}
            />
        </Box>
    )
};

export default AutocompleteTns;