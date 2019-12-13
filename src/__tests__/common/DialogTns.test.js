import React from 'react';
import { shallow } from 'enzyme';
import DialogTns from '../../common/DialogTns';

describe('<DialogTns />', () => {
   it('Rendering', () => {
      const dialogTns = shallow(<DialogTns />);
      expect(dialogTns).toMatchSnapshot();
   });
});