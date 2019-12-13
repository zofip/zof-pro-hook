import React from 'react';

import NumberInput from '../../common/NumberInput';
import PorcentSlider from '../../common/PorcentSlider';
import { PERCENT } from '../../utils/constants'


const ValidateInput = ({unit, handleInputValueChange}) => {
    if(unit === PERCENT) {
        return <PorcentSlider handleInputValueChange ={handleInputValueChange} />;
    }
    return <NumberInput handleInputValueChange = {handleInputValueChange}/>;
}

export default ValidateInput;