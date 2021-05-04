import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ColorLens from '@material-ui/icons/ColorLens';
import AddToPhotos from '@material-ui/icons/AddToPhotos';
import FormatSize from '@material-ui/icons/FormatSize';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  AddTemplateTabOneComp,AddTemplateTabTwoComp,AddTemplateTabThreeComp
} from 'enl-components';


function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  rootPaper: {
    flexGrow: 1,
    padding: 30
  },
  tabs: {
    '& button': {
      minWidth: 82
    }
  }
})

class AddTemplate extends React.Component {
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
      <Grid container spacing={3} alignItems="flex-start" direction="row">
        <Grid item xs={12} md={4}>
        <Paper>
      <div className={classes.root}>

        

        <AppBar position="static" color="default" >
          <Tabs
            
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="secondary"
            className={classes.tabs}
          >
            <Tab icon={<ColorLens />} />
            <Tab icon={<AddToPhotos />} />
            <Tab icon={<FormatSize />} />
            
          </Tabs>
        </AppBar>
        {value === 0 && <AddTemplateTabOneComp/>}
        {value === 1 && <AddTemplateTabTwoComp/>}
        {value === 2 && <AddTemplateTabThreeComp/>}

      </div>
      </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
      <Paper className={classes.rootPaper}>
      <div className={classes.root}>
        </div>
        </Paper>
        </Grid>
        </Grid>
    );
  }
}

AddTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTemplate);