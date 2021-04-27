import React from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';

import {
  ComprehensiveCompanyComp
} from 'enl-components';


function ComprehensveCompany(props) {
  const title = brand.name + ' - Personal Dashboard';
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
      <ComprehensiveCompanyComp/>
    </div>
  );
}
export default ComprehensveCompany;
