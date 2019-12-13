import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from '../../common/NumberInput';

describe('<NumberInput />', () => {
   it('Rendering', () => {
      const numberInput = shallow(<NumberInput />);
      expect(numberInput).toMatchSnapshot();
   });
});