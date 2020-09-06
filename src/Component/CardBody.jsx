import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const CardBody = (props) => {
  return (
    <Grid container item xs={12} className="CardBodyMain">
      <Grid item xs={6} className="CB_Container">
        <Paper elevation={3} className="CD_total">
          <h3>Total {props.name}</h3>
          <h1>${props.sum}</h1>
        </Paper>
        <Paper elevation={3} className="CD_total">
          <h3>Last Transaction</h3>
          <h1>${props.last}</h1>
        </Paper>
      </Grid>
      <Grid item xs={6} className="CB_historyContainer">
        <Grid item xs={6} className="CB_history">
          <h1>{props.name} History</h1>
          <ul>{props.jsx}</ul>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardBody;
