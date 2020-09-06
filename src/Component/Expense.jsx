import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "./Card";
import { Grid, Button } from "@material-ui/core";
import CardBody from "./CardBody";
import { useSelector, useDispatch } from "react-redux";
import { del_expense } from "../redux/expense/ActionExpense";
import { increseCount } from "../redux/Count/Count";

const Expense = (props) => {
  const expense = useSelector((state) => state.Expense.expense);
  const dispatch = useDispatch();

  const delexpense = (id) => {
    dispatch(del_expense(id));
    dispatch(increseCount());
  };
  const length = expense.length - 1;
  let Sum = 0;
  expense.map((data) => (Sum += data.expense));

  let last = expense[length] !== undefined ? expense[length].expense : 0;

  return (
    <Paper elevation={3} style={{ margin: "10px", height: "97%" }}>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Card
            label="Expense"
            name="expense"
            btn="Add Expense"
            color="secondary"
          />
        </Grid>
      </Grid>
      <CardBody
        name="Expense"
        last={last}
        sum={Sum}
        jsx={expense.map((expenseData) => {
          return (
            <div
              key={expenseData.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <li
                style={{ textAlign: "right" }}
              >{`+ $${expenseData.expense}`}</li>
              <span>
                <Button
                  color="secondary"
                  onClick={() => delexpense(expenseData.id)}
                >
                  Del
                </Button>
              </span>
            </div>
          );
        })}
      />
    </Paper>
  );
};

export default Expense;
