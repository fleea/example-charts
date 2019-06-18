import React from 'react';
import './App.css';
import ChartContainer from "./components/chart/chart";
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
      <Grid container spacing={3}>
          <Grid item xs={4}>
              <ChartContainer/>
          </Grid>
      </Grid>
  );
};

export default App;
