import React from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import Paper from '@material-ui/core/Paper';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  DivisionComp,DivisionFormComp
} from 'enl-components';


function Division(props) {
  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = props;
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
    
     <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center" >
     <Grid item xs={12} md={8}>
     <DivisionComp/>
       </Grid>
       <Grid item xs={12} md={4}>
     <DivisionFormComp/>
       </Grid>
       </Grid>
    </div>
  );
}
export default Division;
