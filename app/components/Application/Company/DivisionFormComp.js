import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
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

function ReduxFormDemo(props) {
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
        <Typography variant="h5" component="h3">
             Add Division
        </Typography>


        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="text"
              component={TextFieldRedux}
              placeholder="Division Name"
              label="Division Name"
              validate={required}
              required
              className={classes.field}
            />
          </div>
          <div className={classes.field}>
            <Field
              name="textarea"
              className={classes.field}
              component={TextFieldRedux}
              placeholder="Division Description"
              label="Division Description"
              multiline={trueBool}
              rows={4}
            />
          </div>
          <div className={classes.fieldBasic}>
            <FormLabel component="label">Status</FormLabel>
            <Field name="radio" className={classes.inlineWrap} component={renderRadioGroup}>
              <FormControlLabel value="option1" control={<Radio />} label="Active" />
              <FormControlLabel value="option2" control={<Radio />} label="Pending" />
            </Field>
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

ReduxFormDemo.propTypes = {
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
})(ReduxFormDemo);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);
export default withStyles(styles)(FormInit);
