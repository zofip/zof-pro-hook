import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './pages/main/Main';
import IndicatorMain from "./pages/indicator/IndicatorMain";

const App = () => {

  return (
  <Router>
      <Route exact path="/" component={Main} />
      <Route path="/indicators/:componentId" component={IndicatorMain} />
  </Router>
  );
}

export default App;
