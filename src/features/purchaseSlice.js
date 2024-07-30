const initialState = [];

const purchasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_PURCHASES":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default purchasesReducer;
