import { createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;
console.log("productslice");

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${apiURL}products?offset=0&limit=10`);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
