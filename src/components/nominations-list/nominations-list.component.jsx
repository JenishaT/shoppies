import React from "react";
import { connect } from "react-redux";
import "./nominations-list.styles.scss";
import Card from "@material-ui/core/Card";
import { CardContent, Button, Grid, CardActions } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Alert } from "@material-ui/lab";


import { removeNomination, reset } from "../../redux/movie/movie.actions";


class NominationsList extends React.Component {
    state = {
        nominations: this.props.movie.nominations,
        completeNominations: false
    }
    componentDidUpdate(prevProps) {
        const { movie } = this.props;
        if (movie.nominations !== prevProps.movie.nominations) {
            this.setState({ nominations: this.props.movie.nominations });
        }
    }

    removeNomination(id) {
        this.props.removeNomination(id);
    }

    submitNominations = (e) => {
        this.setState({ completeNominations: true })
    }

    resetNominations = (e) => {
        this.props.reset();
        this.setState({completeNominations: false});
    }

    render() {
        return (
            <React.Fragment>
                <Dialog
                    open={this.state.completeNominations}
                    fullWidth={true}
                    maxWidth="sm"
                    style={{ backgroundColor: "transparent" }}
                >
                    <DialogContent>
                        <Typography variant="h6" gutterBottom>
                            You have submitted your nominations! Below are your nominations:
                        </Typography>

                        {this.state.nominations ? (this.state.nominations.map((movie) => (
                            <Card elevation={0}>
                                <b>{movie.Title}</b> ({movie.Year})
                            </Card>
                        ))) : null
                        }
                        <Grid justify="flex-end" container spacing={1}>
                            <Button variant="outlined" onClick={this.resetNominations}>
                                Ok
                            </Button>
                        </Grid>

                    </DialogContent>
                </Dialog>
                <Card id="nomination-container" >
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Nominations
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {this.state.nominations && this.state.nominations.length === 5 ? <Alert severity="success" maxWidth action={
                                <Button color="inherit" size="small" onClick={this.submitNominations}>
                                    Submit
                                </Button>
                            }>
                                5 Nominees Selected! Click 'Submit' to complete nominations!
                            </Alert> : null}
                        </Grid>

                        <Grid item xs={12}>
                            {this.state.nominations && this.state.nominations.length > 5 ? <Alert severity="error" maxWidth>
                                You have selected more than 5 nominees! Please Remove Some.
                            </Alert> : null}
                        </Grid>
                        <Grid item xs={12}>
                            <Card id="nomination-container-list" elevation={0}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    {this.state.nominations ? (this.state.nominations.map((movie) => (
                                        <Grid item xs={11}>
                                            <Card variant="outlined" id="nomination-card" key={movie.imdbID}>
                                                <CardContent>
                                                    <Grid container spacing={2}>
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
                                                                        <Button variant="outlined" onClick={this.removeNomination.bind(this, movie.imdbID)}>
                                                                            Remove
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
                        </Grid>
                    </Grid>
                </Card>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie
});

const mapDispatchToProps = (dispatch) => ({
    removeNomination: (id) => dispatch(removeNomination(id)),
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(NominationsList);
