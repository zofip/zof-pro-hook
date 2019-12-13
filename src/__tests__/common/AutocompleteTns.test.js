import React from 'react';
import { shallow } from 'enzyme';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import AutocompleteTns from '../../common/AutocompleteTns';

describe('<AutocompleteTns />', () => {
   it('Rendering', () => {
      const title = 'Client';
      const placeholder = 'Select Client';
      const selectOption = { value: '1', label: 'Project 1' };
      const isDisabled = true;
      const options = [
         { value: '1', label: 'Project 1' },
         { value: '2', label: 'Project 2' }
      ];

      const autocompleteTns = shallow(<AutocompleteTns 
         title={title}
         placeholder={placeholder}
         options={options}
         selectOption={selectOption}
         isDisabled={isDisabled} />);

      expect(autocompleteTns.find(Box)).toHaveLength(1)
      expect(autocompleteTns.find(Typography).text()).toEqual(title);
      expect(autocompleteTns.find(Select).props().placeholder).toEqual(placeholder);
      expect(autocompleteTns.find(Select).props().options).toEqual(options);
      expect(autocompleteTns.find(Select).props().value).toEqual(selectOption);
      expect(autocompleteTns.find(Select).props().isDisabled).toEqual(isDisabled);
   });
});
