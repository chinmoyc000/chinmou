import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import Outer from '../Templates/Outer';

import {
  Login, Register,
  LoginFullstack, RegisterFullstack,
  ResetPassword, ResetPasswordFullstack,
  LockScreen, ComingSoon,
  Maintenance, TermsConditions
} from '../pageListAsync';

function Auth() {
  return (
  
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/login-firebase" component={LoginFullstack} />
        <Route path="/register-firebase" component={RegisterFullstack} />
        <Route path="/reset-firebase" component={ResetPasswordFullstack} />
        <Route path="/lock-screen" component={LockScreen} />
        <Route path="/maintenance" component={Maintenance} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/terms-conditions" component={TermsConditions} />
        <Route component={NotFound} />
      </Switch>
      
  );
}

export default Auth;
