import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
  CompanyDocAndFilesComp
} from 'enl-components';

import {

  SelectRedux,
  TextFieldRedux,

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
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

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

function AddClientCompanyComp(props) {
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
      <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
        <Grid item xs={12} md={9}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
            Add Company
            </Typography>


            <form onSubmit={handleSubmit}>
              <div>
                <Field
                  name="company_name"
                  component={TextFieldRedux}
                  placeholder="Company Name"
                  label="Company Name"
                  validate={required}
                  required
                  className={classes.field}
                />
              </div>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <div>
                    <Field
                      name="contact_email"
                      component={TextFieldRedux}
                      placeholder="Contact Email"
                      label="Contact Email"
                      required
                      validate={[required, email]}
                      className={classes.field}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <Field
                      name="contact_phone"
                      component={TextFieldRedux}
                      placeholder="Contact Phone"
                      label="Contact Phone"
                      required
                      validate={[required]}
                      className={classes.field}
                    />
                  </div>
                </Grid>
              </Grid>

              <div className={classes.field}>
                <Field
                  name="company_address"
                  className={classes.field}
                  component={TextFieldRedux}
                  placeholder="Company Address"
                  label="Company Address"
                  multiline={trueBool}
                  rows={4}
                />
              </div>

              <Typography variant="h5" component="h3">
             Registration Details
              </Typography>
              <div>
                <Field
                  name="registration_number"
                  component={TextFieldRedux}
                  placeholder="Registration Number"
                  label="Registration Number"

                  className={classes.field}
                />
              </div>

              <div>
                <Field
                  name="registration_date"
                  component={TextFieldRedux}
                  placeholder="Registration Date"
                  label="Registration Date"

                  className={classes.field}
                />
              </div>

              <div>
                <Field
                  name="vat_registration"
                  component={TextFieldRedux}
                  placeholder="VAT Registration"
                  label="VAT Registration"

                  className={classes.field}
                />
              </div>

              <Typography variant="h5" component="h3">
              Additional Info
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>

                  <div>
                    <FormControl className={classes.field}>
                      <InputLabel htmlFor="selection">Parent Company</InputLabel>
                      <Field
                        name="parent_company"
                        component={SelectRedux}
                        placeholder="Parent Company"
                        autoWidth={trueBool}
                      >
                        <MenuItem value="option1">Option One</MenuItem>
                        <MenuItem value="option2">Option Two</MenuItem>
                        <MenuItem value="option3">Option Three</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <FormControl className={classes.field}>
                      <InputLabel htmlFor="selection">Company Type</InputLabel>
                      <Field
                        name="company_type"
                        component={SelectRedux}
                        placeholder="Company Type"
                        autoWidth={trueBool}
                      >
                        <MenuItem value="option1">Option One</MenuItem>
                        <MenuItem value="option2">Option Two</MenuItem>
                        <MenuItem value="option3">Option Three</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <div>
                    <Field
                      name="dept_of_labour_approval"
                      component={TextFieldRedux}
                      placeholder="Dept of labour approval"
                      label="Dept of labour approval"

                      className={classes.field}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <Field
                      name="sanas_accreditation_status"
                      component={TextFieldRedux}
                      placeholder="Sanas accreditation status"
                      label="Sanas accreditation status"

                      className={classes.field}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <div>
                    <FormControl className={classes.field}>
                      <InputLabel htmlFor="selection">Plan Memership</InputLabel>
                      <Field
                        name="plan_memership"
                        component={SelectRedux}
                        placeholder="Plan Memership"
                        autoWidth={trueBool}
                      >
                        <MenuItem value="option1">Option One</MenuItem>
                        <MenuItem value="option2">Option Two</MenuItem>
                        <MenuItem value="option3">Option Three</MenuItem>
                      </Field>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    <Field
                      name="membership_expires_on"
                      component={TextFieldRedux}
                      placeholder="Membership Expires on"
                      label="Membership Expires on"

                      className={classes.field}
                    />
                  </div>
                </Grid>
              </Grid>
              <Typography variant="h5" component="h3">
             Company Files & Documents
              </Typography>
              <div>
                <CompanyDocAndFilesComp />
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
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
           Publish
            </Typography>
            <div className={classes.fieldBasic}>
              <FormLabel component="label">Status</FormLabel>
              <Field name="status" className={classes.inlineWrap} component={renderRadioGroup}>
                <FormControlLabel value="A" control={<Radio />} label="Active" />
                <FormControlLabel value="P" control={<Radio />} label="Pending" />
              </Field>
            </div>

            <div className={classes.fieldBasic}>
              <FormLabel component="label">Do you want to generate short tracking no. for new task</FormLabel>
              <Field name="short_tr_tracking_id2" className={classes.inlineWrap} component={renderRadioGroup}>
                <FormControlLabel value="1" control={<Radio />} label="Yes" />
                <FormControlLabel value="0" control={<Radio />} label="No" />
              </Field>
            </div>


          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

AddClientCompanyComp.propTypes = {
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
})(AddClientCompanyComp);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);
export default withStyles(styles)(FormInit);
