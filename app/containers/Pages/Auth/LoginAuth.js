import React from 'react';
import { Helmet } from 'react-helmet';
import {LoginFormAuth } from 'enl-components';
import brand from 'enl-api/dummy/brand';
class LoginAuth extends React.Component {
  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    return (
    <div>
       <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>

      
    <LoginFormAuth/>
    
    
    </div>
    );
  }
}
export default LoginAuth;