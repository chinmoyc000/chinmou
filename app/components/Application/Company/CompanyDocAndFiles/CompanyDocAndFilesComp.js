import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import DeleteForever from '@material-ui/icons/DeleteForever';
import AddBox from '@material-ui/icons/AddBox';
import {
  TextFieldRedux
} from 'enl-components/Forms/ReduxFormMUI';
// validation functions
const required = value => (value == null ? 'Required' : undefined);
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  rowButton: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  pinkAvatar: {
    margin: 15,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 15,
    color: '#fff',
    backgroundColor: green[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

function CompanyDocAndFilesComp(props) {
  const { classes } = props;


  const [inputList, setInputList] = useState([{ }]);
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { }]);
  };

  return (
    <div className="App">

      {inputList.map((x, i) => (
        <div className="box">

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <div>
                <Field
                  name={'firstName_' + i}
                  component={TextFieldRedux}
                  placeholder="Title"
                  label="Title"
                  validate={required}
                  required
                  className={classes.field}
                  value={x.irstName_ + i}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.rowButton}>
                <Tooltip title="File Upload ">
                  <Avatar className={classes.pinkAvatar}>
                    <Icon>file_upload</Icon>
                  </Avatar>
                </Tooltip>
                <Tooltip title="Schedule">
                  <Avatar className={classes.greenAvatar}>
                    <Icon>schedule</Icon>
                  </Avatar>
                </Tooltip>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <Button onClick={() => handleRemoveClick(i)} className={classes.button} variant="contained" color="secondary">

                    <DeleteForever />
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button onClick={handleAddClick} className={classes.button} variant="contained" color="primary">

                    <AddBox />
                  </Button>
                )}
              </div>
            </Grid>

          </Grid>

        </div>
      ))}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}

CompanyDocAndFilesComp.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CompanyDocAndFilesComp);
