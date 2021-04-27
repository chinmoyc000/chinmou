import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {

  SelectRedux,
  TextFieldRedux

} from 'enl-components/Forms/ReduxFormMUI';
import { initAction, clearAction } from 'enl-redux/actions/reduxFormActions';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

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
});


function UsersEmploymentInfoComp(props) {
  const trueBool = true;
  const {
    classes,
    handleSubmit,
    pristine,
    reset,
    submitting
  } = props;
  return (
    <div>

      <Paper className={classes.root}>


        <form onSubmit={handleSubmit}>
          <div>
            <FormControl className={classes.field}>
              <InputLabel htmlFor="selection">Company Name</InputLabel>
              <Field
                name="name"
                component={SelectRedux}
                placeholder="Name"
                autoWidth={trueBool}
              >
                <MenuItem value="mr">Company 1</MenuItem>
                <MenuItem value="mrs">Company 2</MenuItem>
                <MenuItem value="miss">Company 3</MenuItem>
              </Field>
            </FormControl>
          </div>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="division"
                  component={TextFieldRedux}
                  placeholder="Division"
                  label="Division"
                  validate={required}
                  required
                  className={classes.field}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="user_role"
                  component={TextFieldRedux}
                  placeholder="User Role "
                  label="User Role "
                  validate={required}
                  required
                  className={classes.field}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="id_numbe"
                  component={TextFieldRedux}
                  placeholder="ID Numbe"
                  label="ID Numbe"
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="user_name"
                  component={TextFieldRedux}
                  placeholder="User Name"
                  label="User Name"
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="mobile_no"
                  component={TextFieldRedux}
                  placeholder="Mobile"
                  label="Mobile"
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <Field
                  name="dob"
                  component={TextFieldRedux}
                  placeholder="Date of Birth"
                  label="Date of Birth"
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </div>
            </Grid>
          </Grid>


          <div>
            <FormControl className={classes.field}>
              <InputLabel htmlFor="selection">ID Type</InputLabel>
              <Field
                name="id_type"
                component={SelectRedux}
                placeholder="ID Type"
                autoWidth={trueBool}
              >
                <MenuItem value="mr">Mr.</MenuItem>
                <MenuItem value="mrs">Mrs.</MenuItem>
                <MenuItem value="miss">Ms.</MenuItem>
              </Field>
            </FormControl>
          </div>

          <div>
            <FormControl className={classes.field}>
              <InputLabel htmlFor="selection">Designation</InputLabel>
              <Field
                name="designation"
                component={SelectRedux}
                placeholder="Designation"
                autoWidth={trueBool}
              >
                <MenuItem value="mr">Mr.</MenuItem>
                <MenuItem value="mrs">Mrs.</MenuItem>
                <MenuItem value="miss">Ms.</MenuItem>
              </Field>
            </FormControl>
          </div>

          <div>
            <Field
              name="employee_type"
              component={TextFieldRedux}
              placeholder="Employee Type"
              label="Employee Type"
              required
              validate={[required]}
              className={classes.field}
            />
          </div>


          <div>
            <Field
              name="qualification"
              component={TextFieldRedux}
              placeholder="Qualification"
              label="Qualification"
              required
              validate={[required]}
              className={classes.field}
            />
          </div>

          <div>
            <Button variant="contained" color="secondary" type="submit" disabled={submitting}>
                  Submit
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
                  Reset
            </Button>
          </div>
        </form>
      </Paper>

    </div>
  );
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

UsersEmploymentInfoComp.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(UsersEmploymentInfoComp);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);

export default withStyles(styles)(FormInit);
