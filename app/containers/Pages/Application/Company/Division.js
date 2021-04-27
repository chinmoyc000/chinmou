import React from 'react';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';


import {
  DivisionComp, DivisionFormComp
} from 'enl-components';

function Division() {
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

      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md={8}>
          <DivisionComp />
        </Grid>
        <Grid item xs={12} md={4}>
          <DivisionFormComp />
        </Grid>
      </Grid>
    </div>
  );
}
export default Division;
