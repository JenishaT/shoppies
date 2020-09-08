import React from 'react';
import { Grid } from "@material-ui/core";
import './App.css';

import SearchBar from "./components/search-bar/search-bar.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <SearchBar> </SearchBar>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
