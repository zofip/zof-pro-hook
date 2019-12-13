import React from 'react';
import { shallow } from 'enzyme';

import ValidateInput from '../../../pages/indicator/ValidateInput';
import { PERCENT } from '../../../utils/constants';

describe('<ValidateInput />', () => {
   it('Rendering', () => {
      const validateInputPercent = shallow(<ValidateInput unit={PERCENT}/>);
      expect(validateInputPercent).toMatchSnapshot();
      const validateInputNumber = shallow(<ValidateInput />);
      expect(validateInputNumber).toMatchSnapshot();
   });
});
