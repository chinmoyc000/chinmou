import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
// import Outer from '../Templates/Outer';

import {
  Login, ResetPassword, TermsConditions
} from '../pageListAsync';

function Auth() {
  return (

    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route component={NotFound} />
    </Switch>

  );
}

export default Auth;
