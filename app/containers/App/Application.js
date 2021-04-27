import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import { AppContext } from './ThemeWrapper';
import withAuthorizationRouter from '../Session/withAuthorizationRouter';

import {
  AnalyticDashboard, MarketingDashboard, CryptoDashboard,Division,ComprehensveCompany,AddClientCompany,
  ListUsers,AddUsersForm,NotFound
} from '../pageListAsync';

function Application(props) {
  const { history } = props;
  const changeMode = useContext(AppContext);

  return (
  
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        { /* Home */ }
        <Route exact path="/app" component={AnalyticDashboard} />
        <Route path="/app/marketing-dashboard" component={MarketingDashboard} />
        <Route path="/app/crypto-dashboard" component={CryptoDashboard} />
        { /* Users */ }
        <Route path="/app/list-users" component={ListUsers} />
        <Route path="/app/add-users" component={AddUsersForm} />
        { /* Company */ }
        <Route path="/app/department" component={Division} />
        <Route path="/app/comprehensive-company" component={ComprehensveCompany} />
        <Route path="/app/add-client-company" component={AddClientCompany} />
        <Route path="/app/list-client-company" component={ComprehensveCompany} />
        
        { /* Default */ }
        <Route component={NotFound} />
      </Switch>
    </Dashboard>
    
  );
}
Application.propTypes = 
{
  history: PropTypes.object.isRequired,
};

export default Application;
