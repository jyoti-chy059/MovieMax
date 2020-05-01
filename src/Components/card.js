import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { imageBaseUrl } from 'Utils/constant';

const smallCard = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        paddingRight: '1rem',
        flex: '0 0 10%',
        alignItems: 'center',
        overflow: 'hidden',
      },
    },
    MuiCardMedia: {
      root: {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        border: '1px solid white',
        borderRadius: 15,
      },
    },
    MuiCardActionArea: {
      root: {
        width: '100%',
        display: 'block',
        textAlign: 'inherit',
        height: '100%',
      },
    },
  },
});
const mediumCard = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: '0 0 10%',
        alignItems: 'center',
        overflow: 'hidden',
        margin: '0.5rem',
        borderRadius: 15,
        height: '13rem',
      },
    },
    MuiCardMedia: {
      root: {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%',
        border: '1px solid white',
      },
    },
    MuiCardActionArea: {
      root: {
        width: '100%',
        display: 'block',
        textAlign: 'inherit',
        height: '100%',
      },
    },
  },
});

const MediaCard = ({ data, cardSize }) => {
  const getTheme = () => {
    if (cardSize === 's') {
      return smallCard;
    } else if (cardSize === 'm') {
      return mediumCard;
    }
  };
  return (
    <MuiThemeProvider theme={getTheme()}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={`${imageBaseUrl}${data.image}`}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </MuiThemeProvider>
  );
};

export default MediaCard;
