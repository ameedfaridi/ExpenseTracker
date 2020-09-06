export const ADD_EXPENSE = "ADD_EXPENSE";
export const DEL_EXPENSE = "DEL_EXPENSE";

export const add_expense = (info) => {
  return {
    type: ADD_EXPENSE,
    payload: info,
  };
};

export const del_expense = (id) => {
  return {
    type: DEL_EXPENSE,
    id: id,
  };
};
