import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieGridItem from "./MovieGridItem";

import { loadMovies } from '../store/actions';

const useStyles = makeStyles({
    wrap: {
        padding: '6px'
    }
});

function MovieGrid(props) {
    const classes = useStyles();
    useEffect(() => {
        props.loadMovies()
    }, [])

    const { movies } = props;

    return (
        <div>
            <Grid container >
                {movies.map(movie => (
                    <MovieGridItem movie={movie} />
                ))}
            </Grid>
            <button onClick={props.loadMovies}>Load more</button>

        </div>
    );
}


const mapStateToProps = ({ isLoading, movies, error }) => ({
    isLoading,
    movies,
    error
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    loadMovies: () => dispatch(loadMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
