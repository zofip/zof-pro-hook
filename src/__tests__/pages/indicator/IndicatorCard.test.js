import React from 'react';
import { shallow } from 'enzyme';

import addedIndicatorsReducer from '../../../pages/indicator/reducers/addedIndicatorReducer';
import IndicatorContext from '../../../pages/indicator/IndicatorContext';
import IndicatorCard from '../../../pages/indicator/IndicatorCard';
import { jsxEmptyExpression } from '@babel/types';

describe('<IndicatorCard />', () => {
   it('Rendering', () => {    
      
      const indicatorPercent = {
        'componentId': 1,
        'extractorId': 3,
        'graphic': "Areas",
        'id': 3,
        'kpi': ">65",
        'metric': {
            'description': "Cobertura de código a través de pruebas unitarias. (Obtener de Sonar) ",
            'id': 3,
            'name': "coverage",
            'type': "Técnico / Código",
            'unit': "PORCENTAJE"
        },
        'metricId': 3,
        'percintil_alert': 40
      };  

      const indicatorNumber = {
         'componentId': 1,
         'extractorId': 12,
         'graphic': "Barras",
         'id': 9,
         'kpi': "<40",
         'metric': {
            'description': "Un problema relacionado con la mantenibilidad en el código. Dejarlo como está significa que, en el mejor de los casos, los mantenedores tendrán más dificultades de lo que deberían hacer cambios en el código. En el peor de los casos, estarán tan confundidos por el estado del código que introducirán errores adicionales a medida que realicen cambios. (Obtiene de Sonar).",
            'id': 4,
            'name': "code_smell",
            'type': "Técnico / Código",
            'unit': "CANTIDAD"
         },
         'metricId': 4,
         'percintil_alert': 50
       }; 

      const TestComponent = () => (
      <IndicatorContext.Provider value={jest.fn()} >
            <IndicatorCard indicator={indicatorPercent} />
      </IndicatorContext.Provider>
     );

      const indicatorCardPercent = shallow(<TestComponent />);
      expect(indicatorCardPercent).toMatchSnapshot();
      const indicatorCardNumber = shallow(<IndicatorCard indicator={indicatorNumber} />);
      expect(indicatorCardNumber).toMatchSnapshot();
   });
});