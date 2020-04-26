import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  ul: {
    '& > *': {
      justifyContent: 'center',
    },
  },
}));
const AppPagination = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} shape="rounded" />
    </div>
  );
};

export default AppPagination;
