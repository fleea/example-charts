import React from 'react';
import './App.scss';
import ChartContainer from "./components/chart/chart";
import Grid from '@material-ui/core/Grid';
import Footer from "./components/footer/footer";

const App = () => {
  return (
      <>
          <Grid container className="banner">
              <Grid item xs={3}>
                  <ChartContainer/>
              </Grid>
          </Grid>
          <Footer/>
      </>
  );
};

export default App;
