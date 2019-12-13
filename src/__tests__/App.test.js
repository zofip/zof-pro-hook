import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
   it('Rendering', () => {
      const app = shallow(<App />);
      expect(app).toMatchSnapshot();
   });
});

// https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071
// https://itnext.io/testing-components-built-using-react-hooks-with-jest-enzyme-edb87d703756
// https://devhints.io/enzyme