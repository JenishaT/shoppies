import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';

import SearchBar from "./components/search-bar/search-bar.component";
import SearchResults from "./components/search-results/search-results.component"

function App() {
  return (
    <div className="App">
      <h2>
        The Shoppies
    </h2>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <SearchBar> </SearchBar>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item xs={12} sm={6}>
              <SearchResults></SearchResults>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
