import { ADD_INCOME, DEL_INCOME } from "./Income/ActionIncome";
import { ADD_EXPENSE, DEL_EXPENSE } from "./expense/ActionExpense";
import { combineReducers } from "redux";
import { CountPlus, CountReset } from "./Count/Count";

const intialIncomeState = {
  id: 0,
  income: [],
};

const incomeReducer = (state = intialIncomeState, action) => {
  if (action.type === ADD_INCOME) {
    return {
      id: state.id + 1,
      income: [...state.income, { id: state.id, income: action.payload }],
    };
  } else if (action.type === DEL_INCOME) {
    return {
      ...state,
      income: state.income.filter((income) => income.id !== action.id),
    };
  } else {
    return state;
  }
};

const intialExpenseState = {
  id: 0,
  expense: [],
};

const expenseReducer = (state = intialExpenseState, action) => {
  if (action.type === ADD_EXPENSE) {
    return {
      id: state.id + 1,
      expense: [...state.expense, { id: state.id, expense: action.payload }],
    };
  } else if (action.type === DEL_EXPENSE) {
    return {
      ...state,
      expense: state.expense.filter((expense) => expense.id !== action.id),
    };
  } else {
    return state;
  }
};

const intialCountState = {
  count: 0,
};

const countReducer = (state = intialCountState, action) => {
  if (action.type === CountPlus) {
    return {
      count: state.count + 1,
    };
  } else if (action.type === CountReset) {
    return {
      count: 0,
    };
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  Income: incomeReducer,
  Expense: expenseReducer,
  Count: countReducer,
});
