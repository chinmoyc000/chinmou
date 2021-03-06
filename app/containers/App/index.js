import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../Pages/Standalone/NotFoundDedicated';
import Auth from './Auth';
import Application from './Application';
//import LandingCorporate from './Landing';
import ThemeWrapper from './ThemeWrapper';
import ThemeWrapperAuth from './ThemeWrapperAuth';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/app" component={Application} />
        <Route component={Auth} />
        <Route component={NotFound} />
      </Switch>
      </ThemeWrapper>
  );
}
export default App;