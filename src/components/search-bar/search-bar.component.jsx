import React from "react";
import { Paper, InputBase, IconButton, Divider, Grid } from "@material-ui/core";
import {
    Search as SearchIcon,
    Clear as ClearQueryIcon
} from "@material-ui/icons";

import { searchMovies } from "../../redux/movie/movie.actions";
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

import "./search-bar.styles.scss";

import Card from "@material-ui/core/Card";

class SearchBar extends React.Component {
    state = {
        query: "",
        clearQueryVisible: false
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    searchSubmit = (e) => {
        e.preventDefault();
        const { query } = this.state;
        this.props.searchMovies(query);
        this.setState({ clearQueryVisible: true });
    };

    clearQuery = (e) => {
        this.props.searchMovies("");
        this.setState({ query: "", clearQueryVisible: false });
    };

    render() {
        return (
            <Card className="search-container">
                <Typography variant="h6" gutterBottom>
                    Search For Movies
                </Typography>

                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={11}>
                        <Paper
                            component="form"
                            className="search-bar-container"
                            variant="outlined"
                            onSubmit={this.searchSubmit}
                        >
                            {this.state.clearQueryVisible ? (
                                <IconButton onClick={this.clearQuery}>
                                    <ClearQueryIcon />
                                </IconButton>
                            ) : null}
                            <InputBase
                                placeholder="Search For Movies"
                                fullWidth
                                required
                                value={this.state.query}
                                onChange={this.handleChange}
                                name="query"
                            />
                            <Divider orientation="vertical" flexItem variant="middle" />
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>

                </Grid>
            </Card>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    searchMovies: (query) => dispatch(searchMovies(query))
});

export default connect(null, mapDispatchToProps)(SearchBar);
