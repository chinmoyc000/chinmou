import React from 'react';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';

import {
  FormBuilderFormeoComp
} from 'enl-components';


function FormBuilder() {
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
      <FormBuilderFormeoComp />
    </div>
  );
}
export default FormBuilder;
