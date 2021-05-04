import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';

import PersonPinIcon from '@material-ui/icons/PersonPin';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  UsersTabBasicInfoComp,UsersEmploymentInfoComp,UsersUploadComp,SideSection
} from 'enl-components';


function UserAddFormComp(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

UserAddFormComp.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollIconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
         <Grid item xs={12} md={8}>
          <Paper >
     
       
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="secondary"
          >
            <Tab label="Basic Info" icon={<PersonPinIcon />} />
            <Tab label="Emploment Info" icon={<Icon>data_usage</Icon>} />
            <Tab label="Uploads" icon={<Icon>file_upload</Icon>} />
            
          </Tabs>
        
        {value === 0 && <UsersTabBasicInfoComp/>}
        {value === 1 && <UsersEmploymentInfoComp/>}
        {value === 2 && <UsersUploadComp/>}
       
    
     
      </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
          <Paper >
            <SideSection/>
            </Paper>
            </Grid>
      </Grid>
   
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);