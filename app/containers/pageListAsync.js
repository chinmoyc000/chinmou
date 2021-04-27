import Loadable from 'react-loadable';
import Loading from 'enl-components/Loading';

// Landing Page
export const HomePage = Loadable({
  loader: () => import('./LandingPage/HomePage'),
  loading: Loading,
});
// Dashboard
export const AnalyticDashboard = Loadable({
  loader: () => import('./Dashboard/AnalyticDashboard'),
  loading: Loading,
});
export const MarketingDashboard = Loadable({
  loader: () => import('./Dashboard/MarketingDashboard'),
  loading: Loading,
});
export const CryptoDashboard = Loadable({
  loader: () => import('./Dashboard/CryptoDashboard'),
  loading: Loading,
});


// Pages
export const Login = Loadable({
  loader: () => import('./Pages/Users/LoginAuth'),
  loading: Loading,
});

export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});

// Other
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const TermsConditions = Loadable({
  loader: () => import('./Pages/TermsConditions'),
  loading: Loading,
});


//ASTRAM APPLICATION
export const Division = Loadable({
  loader: () => import('./Pages/Application/Company/Division'),
  loading: Loading,
});

export const ComprehensveCompany = Loadable({
  loader: () => import('./Pages/Application/Company/ComprehensveCompany'),
  loading: Loading,
});

export const AddClientCompany = Loadable({
  loader: () => import('./Pages/Application/Company/AddClientCompany'),
  loading: Loading,
});

export const ListUsers = Loadable({
  loader: () => import('./Pages/Application/Users/ListUsers'),
  loading: Loading,
});

export const AddUsersForm = Loadable({
  loader: () => import('./Pages/Application/Users/AddUsersForm'),
  loading: Loading,
});

