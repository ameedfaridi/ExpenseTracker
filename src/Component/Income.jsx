import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Button } from "@material-ui/core";
import Card from "./Card";
import { connect, useDispatch } from "react-redux";
import { del_income } from "../redux/Income/ActionIncome";
import CardBody from "./CardBody";
import { increseCount } from "../redux/Count/Count";

const Income = (props) => {
  const dispatch = useDispatch();
  const { income } = props;

  const delIncome = (id) => {
    dispatch(del_income(id));
    dispatch(increseCount());
  };

  const length = income.length - 1;

  let Sum = 0;
  income.map((data) => (Sum += data.income));

  let last = income[length] !== undefined ? income[length].income : 0;

  return (
    <Paper elevation={8} style={{ margin: "10px", height: "97%" }}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Card name="income" btn="Add Income" color="primary" />
        </Grid>
        <CardBody
          jsx={income.map((incomeData) => {
            return (
              <div
                key={incomeData.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <li
                  style={{ textAlign: "right" }}
                >{`+ $${incomeData.income}`}</li>
                <span>
                  <Button
                    color="secondary"
                    onClick={() => delIncome(incomeData.id)}
                  >
                    Del
                  </Button>
                </span>
              </div>
            );
          })}
          name="Income"
          last={last}
          sum={Sum}
        />
      </Grid>
    </Paper>
  );
};

const MapStateToProps = (state) => {
  return {
    income: state.Income.income,
  };
};

export default connect(MapStateToProps)(Income);
