import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form/immutable';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import InputColor from 'react-input-color';
import Paper from '@material-ui/core/Paper';
import 
{
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
    marginBottom: 10
  },
  fieldColor: {
    marginLeft: theme.spacing(1),
    marginBottom: 20,
    marginRight: theme.spacing(1)
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

const initData = {
  text: 'Sample Text',
  email: 'sample@mail.com',
  radio: 'option1',
  selection: 'option1',
  onof: true,
  checkbox: true,
  textarea: 'This is default text'
};

function AddTemplateComp(props) {
  const trueBool = true;
  const [color, setColor] = React.useState({});
  const {
    classes,
    handleSubmit,
    pristine,
    reset,
    submitting,
    init,
    clear
  } = props;

  return (
    <div> 
           <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
           <Grid item xs={12} md={12}>
        
           <Paper className={classes.root}>
            <div className={classes.field}>
            
                <Field
                  name="Title"
                  className={classes.field}
                  component={TextFieldRedux}
                  placeholder="Title"
                  label="Title"
                
                />
                
              </div>
            <div>
                <FormControl className={classes.field}>
                  <InputLabel htmlFor="selection">Selection</InputLabel>
                  <Field
                    className={classes.field}
                    name="selection"
                    component={SelectRedux}
                    placeholder="Selection"
                    autoWidth={trueBool}
                  >
                    <MenuItem value="option1">Option One</MenuItem>
                    <MenuItem value="option2">Option Two</MenuItem>
                    <MenuItem value="option3">Option Three</MenuItem>
                  </Field>
                </FormControl>
              </div>


              <div>
              <Grid container spacing={0} alignItems="flex-start" direction="row">
              <Grid item xs={12} md={9}>
                <Field
                  name="Paging_Text_Color"
                  component={TextFieldRedux}
                  placeholder="Paging Text Color"
                  label="Paging Text Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
                </Grid>
                <Grid item xs={12} md={3}>
                <InputColor style={{
                height:35,
                  marginTop: 22
              
                }}
                initialValue="#5e72e4"
                onChange={setColor}
                placement="right"
              />
              </Grid>
              </Grid>
              </div>
              <div>
              <Grid container spacing={0} alignItems="flex-start" direction="row">
              <Grid item xs={12} md={9}>
                <Field
                  name="Paging_Background_Color"
                  component={TextFieldRedux}
                  placeholder="Paging Background Color"
                  label="Paging Background Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
                </Grid>
                <Grid item xs={12} md={3}>
                <InputColor style={{
                height:35,
                  marginTop: 22
              
                }}
                initialValue="#5e72e4"
                onChange={setColor}
                placement="right"
              />
              </Grid>
              </Grid>
              </div>
              <div>
              <Grid container spacing={0} alignItems="flex-start" direction="row">
              <Grid item xs={12} md={9}>
                <Field
                  name="Heading_Background_Color"
                  component={TextFieldRedux}
                  placeholder="Heading Background Color"
                  label="Heading Background Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
                </Grid>
                <Grid item xs={12} md={3}>
                <InputColor style={{
                height:35,
                  marginTop: 22
              
                }}
                initialValue="#5e72e4"
                onChange={setColor}
                placement="right"
              />
              </Grid>
              </Grid>
              </div>
              <div>
              <Grid container spacing={0} alignItems="flex-start" direction="row">
              <Grid item xs={12} md={9}>
                <Field
                  name="text"
                  component={TextFieldRedux}
                  placeholder="Paging Background Color"
                  label="Paging Background Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
                </Grid>
                <Grid item xs={12} md={3}>
                 <InputColor style={{
        height:35,
          marginTop: 22
       
        }}
        initialValue="#5e72e4"
        onChange={setColor}
        placement="right"
      />
      </Grid>
      </Grid>
              </div>
              <div className={classes.field}>
                <Field
                  name="textarea"
                  className={classes.field}
                  component={TextFieldRedux}
                  placeholder="Textarea"
                  label="Textarea"
                 
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
              </Paper>
            </Grid>
            </Grid>
    </div>
  );
}

renderRadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
};

AddTemplateComp.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const ReduxFormMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(AddTemplateComp);

const reducer = 'initval';
const FormInit = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(ReduxFormMapped);
export default withStyles(styles)(FormInit);