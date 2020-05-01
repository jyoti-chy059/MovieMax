import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '&': {
      marginTop: theme.spacing(2),
      // flex: '1 1 10%',
      paddingTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  ul: {
    '& > *': {
      justifyContent: 'center',
    },
  },
}));
const AppPagination = ({ currentPage, noOfPages, onChange }) => {
  const handlePageChange = (event, value) => {
    onChange(value);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        page={currentPage}
        count={noOfPages}
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
};

export default AppPagination;
