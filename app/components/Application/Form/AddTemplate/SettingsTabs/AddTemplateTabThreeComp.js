import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { initAction, clearAction } from 'enl-redux/actions/reduxFormActions';
import{
  FileUploadWithPreviewCom
} from 'enl-components/Forms/FileUploadWithPreview';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueselected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const renderField = ({ input, ...rest }) => (
  <TextField
  {...input}
  {...rest}
  InputProps={{
    endAdornment: <InputAdornment position="end">px</InputAdornment>,
  }}
/>
)


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
  margin: {
    margin: theme.spacing(4),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
    '& > div': {
      alignItems: 'center'
    }
  },
  textField: {
    flexBasis: 300,
  }
});

function AddTemplateComp(props) {
  const {
    classes,
    pristine,
    reset,
    submitting
  } = props;


  

  return (
    <div> 
           <Grid container spacing={3} alignItems="flex-start" direction="row" justify="center">
           <Grid item xs={12} md={12}>
        
           <Paper className={classes.root}>

              <div>
                <Field
                  name="PDF_Settings_Margin_Left "
                  component={renderField}
                  placeholder="PDF Settings Margin Left "
                  label="PDF Settings Margin Left "
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
               
                
              </div>
              <div>
                <Field
                  name="PDF_Settings_Margin_Right "
                  component={renderField}
                  placeholder="PDF Settings Margin Right "
                  label="PDF Settings Margin Right "
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
              </div>
              <div>
                <Field
                  name="PDF_Settings_Margin_Top"
                  component={renderField}
                  placeholder="PDF Settings Margin Top "
                  label="PDF Settings Margin Top"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
              </div>

              <div>
                <Field
                  name="Paging_Text_Color"
                  component={renderField}
                  placeholder="Paging Text Color"
                  label="Paging Text Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
              </div>

              <div>
                <Field
                  name="Paging_Text_Color"
                  component={FileUploadWithPreviewCom}
                  placeholder="Paging Text Color"
                  label="Paging Text Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
                />
              </div>

              <div>
                <Field
                  name="Paging_Text_Color"
                  component={FileUploadWithPreviewCom}
                  placeholder="Paging Text Color"
                  label="Paging Text Color"
                  validate={required}
                  required
                  className={classes.fieldColor}
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