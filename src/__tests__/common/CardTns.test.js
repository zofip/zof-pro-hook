import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CardActionArea } from '@material-ui/core';
import CardTns from '../../common/CardTns';

describe('<CardTns />', () => {
   it('Interactions', () => {
      const cardComponent = {id: 1, name: 'bugs'};
      const onCarActionAreaClick = sinon.spy();
      const cardTns = mount(<CardTns cardComponent={cardComponent} handleOnClick={onCarActionAreaClick} />);
      cardTns.find(CardActionArea).simulate('click');
      expect(onCarActionAreaClick).toHaveProperty('callCount', 1);
   });
});