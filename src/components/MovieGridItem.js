import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200
  },
  card:{
    padding: '6px'
  }
});

const MovieGridItem = ({ movie }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={3} className={classes.card} align="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            title="movie image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid >
  )
}

export default MovieGridItem
