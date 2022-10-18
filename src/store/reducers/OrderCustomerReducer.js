import * as actionTypes from "../actions/types";

const initialState = {
  orders: [],
};

const OrderCustomerReducer = (state = initialState, action) => {
  let tempOrders = [];
  switch (action.type) {
    case actionTypes.GET_SENT_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
  }
  return state;
};

export default OrderCustomerReducer;
