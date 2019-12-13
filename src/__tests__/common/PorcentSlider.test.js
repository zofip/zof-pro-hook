import React from 'react';
import { shallow } from 'enzyme';
import { Slider } from '@material-ui/core';
import Input from '@material-ui/core/Input';

import PorcentSlider from '../../common/PorcentSlider';
import { EMPTY } from '../../utils/constants';

describe('<PorcentSlider />', () => {
   it('Interactions', () => {
      const onInputValueChange = jest.fn();
      const porcentSlider = shallow(<PorcentSlider handleInputValueChange={onInputValueChange}/>);
      expect(onInputValueChange).not.toHaveBeenCalled();

      porcentSlider.find(Slider).simulate('change');

      porcentSlider.find(Input).simulate('change', {target: {value: EMPTY}}); 
      porcentSlider.find(Input).simulate('change', {target: {value: -1}}); // Help me to test scenario blur with value=-1
      porcentSlider.find(Input).simulate('blur');

      porcentSlider.find(Input).simulate('change', {target: {value: 101}}); // Help me to test scenario blur with value=101
      porcentSlider.find(Input).simulate('blur');

      expect(onInputValueChange).toHaveBeenCalledTimes(4);
   });
});