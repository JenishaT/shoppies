import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';

import SearchBar from "./components/search-bar/search-bar.component";
import SearchResults from "./components/search-results/search-results.component"
import NominationsList from "./components/nominations-list/nominations-list.component"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          The Shoppies
    </h2>
      </header>
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
          <Grid container direction="row" spacing={1}>
            <Grid item xs={12} sm={6}>
              <SearchResults></SearchResults>
            </Grid>
            <Grid item xs={12} sm={6}>
              <NominationsList></NominationsList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
