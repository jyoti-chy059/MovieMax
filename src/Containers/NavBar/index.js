import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  navBarContainer: {
    height: '12rem',
  },
  navBar: {
    display: 'flex',
    height: '5rem',
    backgroundColor: '#1976d2',
  },
  navLeftOptions: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  navRightOptions: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
}));
const NavBar = () => {
  const classes = useStyles();

  const [movieAnchorEl, setMovieAnchorEl] = useState(null);
  const [seriesAnchorEl, setSeriesAnchorEl] = useState(null);

  const movieHandleClick = (event) => {
    setMovieAnchorEl(event.currentTarget);
  };
  const seriesHandleClick = (event) => {
    setSeriesAnchorEl(event.currentTarget);
  };

  const movieHandleClose = () => {
    setMovieAnchorEl(null);
  };
  const seriesHandleClose = () => {
    setSeriesAnchorEl(null);
  };

  return (
    <div className={classes.navBarContainer}>
      <div className={classes.navBar}>
        <div className={classes.navLeftOptions}>
          <Button aria-haspopup="true" onClick={movieHandleClick}>
            Movies
          </Button>
          <Popover
            anchorEl={movieAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
            }}
            open={Boolean(movieAnchorEl)}
            onClose={movieHandleClose}
          >
            <MenuItem onClick={movieHandleClose}>Upcoming</MenuItem>
            <MenuItem onClick={movieHandleClose}>Now Playing</MenuItem>
            <MenuItem onClick={movieHandleClose}>Popular</MenuItem>
            <MenuItem onClick={movieHandleClose}>Top Rated</MenuItem>
          </Popover>

          <Button aria-haspopup="true" onClick={seriesHandleClick}>
            Series
          </Button>
          <Popover
            anchorEl={seriesAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
            }}
            open={Boolean(seriesAnchorEl)}
            onClose={seriesHandleClose}
          >
            <MenuItem onClick={seriesHandleClose}>Airing Today</MenuItem>
            <MenuItem onClick={seriesHandleClose}>ON Tv</MenuItem>
            <MenuItem onClick={seriesHandleClose}>Popular</MenuItem>
            <MenuItem onClick={seriesHandleClose}>Top Rated</MenuItem>
          </Popover>
        </div>
        <div className={classes.navRightOptions}>
          <Button
            aria-haspopup="true"
            onClick={() => {
              console.log('login');
            }}
          >
            Login
          </Button>
          <Button
            aria-haspopup="true"
            onClick={() => {
              console.log('sing up');
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
