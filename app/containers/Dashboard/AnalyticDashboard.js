import React from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from 'enl-components';
import styles from './dashboard-jss';

function AnalyticDashboard(props) {
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
      {/* 1st Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <CounterIconsWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* 2nd Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
      </Grid>
      
      
     
    </div>
  );
}

AnalyticDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnalyticDashboard);
