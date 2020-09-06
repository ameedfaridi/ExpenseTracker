export const CountPlus = "CountPlus";
export const CountReset = "CountReset";

export const increseCount = () => {
  return {
    type: CountPlus,
  };
};

export const resetCount = () => {
  return {
    type: CountReset,
  };
};
