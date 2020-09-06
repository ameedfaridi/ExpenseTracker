import React from "react";
import { Grid, Paper } from "@material-ui/core";

const HomeBody = (props) => {
  const { incomeSum, expenseSum } = props;
  return (
    <div>
      <Grid
        container
        item
        xs={12}
        style={{
          display: "flex",
          marginTop: "40px",
          justifyContent: "space-evenly",
        }}
      >
        <Paper elevation={3} className="homeTotals">
          Total income<span>${incomeSum}</span>
        </Paper>
        <Paper elevation={3} className="homeTotals">
          Total expense<span>${expenseSum}</span>
        </Paper>
        <Paper elevation={3} className="homeTotals">
          Total Amount<span>${incomeSum - expenseSum}</span>
        </Paper>
      </Grid>
    </div>
  );
};

export default HomeBody;
