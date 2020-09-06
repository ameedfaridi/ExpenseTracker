import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { add_income } from "../redux/Income/ActionIncome";
import { add_expense } from "../redux/expense/ActionExpense";
import { increseCount } from "../redux/Count/Count";

const Card = (props) => {
  const getValue = (e) => {
    e.preventDefault();

    e.target.income
      ? parseInt(e.target.income.value)
        ? props.addIncome(parseInt(e.target.income.value)) && props.incCount()
        : alert("not a number")
      : parseInt(e.target.expense.value)
      ? props.addExpense(parseInt(e.target.expense.value)) && props.incCount()
      : alert("not a number");
    return (document.getElementById("outlined-basic").value = "");
  };

  return (
    <div>
      <form
        style={{ margin: "1.5rem", display: "flex" }}
        style={{ width: "100%", textAlign: "center" }}
        onSubmit={(e) => getValue(e)}
      >
        <TextField
          id="outlined-basic"
          label={props.name}
          variant="outlined"
          name={props.name}
          autoComplete="off"
          required
          style={{ width: "85%", margin: "30px auto" }}
          placeholder="Add payment"
        />
        <Button
          color={props.color}
          variant="contained"
          type="submit"
          style={{ width: "85%" }}
        >
          {props.btn}
        </Button>
      </form>
    </div>
  );
};

const DispatchStateToProps = (dispatch) => {
  return {
    addIncome: (add) => dispatch(add_income(add)),
    addExpense: (add) => dispatch(add_expense(add)),
    incCount: () => dispatch(increseCount()),
  };
};

export default connect(null, DispatchStateToProps)(Card);
