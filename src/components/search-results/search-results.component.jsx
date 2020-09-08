import React from "react";
import { connect } from "react-redux";
import "./search-results.styles.scss";
import Card from "@material-ui/core/Card";
import { CardContent, Button, Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

import { getMovieInfo, addNomination } from "../../redux/movie/movie.actions";


class SearchResults extends React.Component {
    state = {
        movies: this.props.movie.movies,
        nominations: this.props.movie.nominations
    }
    componentDidMount() {
        let { movies } = this.state;
        if (movies) {
            for (let i = 0; i < movies.length; i++) {
                this.props.getMovieInfo(movies[i].imdbID);
            }
        }
        this.setState({ movies: this.props.movie.movies, nominations: this.props.movie.nominations })
    }

    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.movies !== prevProps.movie.movies || movie.nominations !== prevProps.movie.nominations) {
            let movies = this.props.movie.movies;
            if (movies) {
                for (let i = 0; i < movies.length; i++) {
                    this.props.getMovieInfo(movies[i].imdbID);
                }
            }
            this.setState({ movies: this.props.movie.movies, nominations: this.props.movie.nominations });
        }
    }

    nominateMovie(id) {
        this.props.addNomination(id);
    }

    render() {
        return (
            <Card id="result-card-container" >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                            Search Results
                </Typography>
                    </Grid>
                    {this.state.movies ? (this.state.movies.map((movie) => (
                        <Grid item xs={11}>
                            <Card variant="outlined" id="result-card" key={movie.imdbID}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            {movie.Poster ? (
                                                <img id="poster" src={movie.Poster} alt={movie.Title}></img>
                                            ) : null}
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={0}>
                                                <Grid item xs>
                                                    <b>{movie.Title}</b> ({movie.Year})
                                                    <Typography variant="body2" gutterBottom>
                                                        {movie.Plot}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid justify="flex-end" container>
                                                        <Button variant="outlined" disabled={this.state.nominations && this.state.nominations.some(nomination => nomination.imdbID === movie.imdbID)} onClick={this.nominateMovie.bind(this, movie.imdbID)}>
                                                            Nominate
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                    ) : null}
                </Grid>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    getMovieInfo: (id) => dispatch(getMovieInfo(id)),
    addNomination: (id) => dispatch(addNomination(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
