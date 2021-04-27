import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';

const styles = theme => ({
  table: {
    '& > div': {
      overflow: 'auto'
    },
    '& table': {
      '& td': {
        wordBreak: 'keep-all'
      },
      [theme.breakpoints.down('md')]: {
        '& td': {
          height: 60,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    }
  }
});

function DivisionCompAdvFilter(props) {
  const columns = [
    {
      name: 'Name',
      options: {
        filter: true
      }
    },
    {
      name: 'Description',
      options: {
        filter: true,
      }
    },
    {
      name: 'Status',
      options: {
        filter: true,
        customBodyRender: (value) => {
          if (value === 'active') {
            return (<Chip label="Active" color="secondary" />);
          }
          if (value === 'non-active') {
            return (<Chip label="Non Active" color="primary" />);
          }
          return (<Chip label="Unknown" />);
        }
      }
    },
    {
      name: 'Date',
      options: {
        filter: true,
        customBodyRender: (value) => {
          const nf = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });

          return nf.format(value);
        }
      }
    },
  ];

  const data = [
    ['Gabby George', 'Business Analyst', 'active', 100000],
    ['Aiden Lloyd', 'Business Consultant', 'active', 200000],
    ['Jaden Collins', 'Attorney', 'non-active', 500000],
    ['Franky Rees', 'Business Analyst', 'active', 50000],
    ['Aaren Rose', 'Business Consultant', 'unknown', 75000],
    ['Blake Duncan', 'Business Management Analyst', 'active', 94000],
    ['Frankie Parry', 'Agency Legal Counsel', 'non-active', 210000],
    ['Lane Wilson', 'Commercial Specialist', 'active', 65000],

  ];

  const options = {
    filterType: 'dropdown',
    responsive: 'stacked',
    print: false,
    rowsPerPage: 10,
    page: 0
  };

  const { classes } = props;

  return (
    <div className={classes.table}>


      <MUIDataTable
        title="Department list"
        data={data}
        columns={columns}
        options={options}
      />


    </div>
  );
}
DivisionCompAdvFilter.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DivisionCompAdvFilter);
