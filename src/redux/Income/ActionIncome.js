export const ADD_INCOME = "ADD_INCOME";
export const DEL_INCOME = "DEL_INCOME";

export const add_income = (info) => {
  return {
    type: ADD_INCOME,
    payload: info,
  };
};

export const del_income = (id) => {
  return {
    type: DEL_INCOME,
    id: id,
  };
};
