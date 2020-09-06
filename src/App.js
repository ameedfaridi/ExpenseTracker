import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Component/Navbar";
import { Route } from "react-router-dom";
import Home from "./Component/Home";
import Expense from "./Component/Expense";
import Income from "./Component/Income";
import { Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="container">
        <Grid container item xs={12}>
          <Grid item xs={2}>
            <Navbar />
          </Grid>
          <Grid item xs={10} id="grid2">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/income" component={Income} />
              <Route exact path="/expense" component={Expense} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
