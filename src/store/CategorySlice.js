import { createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: STATUS.IDLE,
    catProductAll: [],
    catProductAllStatus: STATUS.IDLE,
    catProductSingle: [],
    catProductSingleStatus: STATUS.IDLE,
  },
  reducers: {
    setCategories: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setCategoriesProductAll: (state, action) => {
      state.catProductAll.push(action.payload);
    },
    setCategoriesAllStatus: (state, action) => {
      state.catProductAllStatus = action.payload;
    },
    setCategoriesProductSingle: (state, action) => {
      state.catProductSingle = action.payload;
    },
    setCategoriesSingleStatus: (state, action) => {
      state.catProductSingleStatus = action.payload;
    },
  },
});

export const { setCategories, setStatus, setCategoriesProductAll, setCategoriesAllStatus, setCategoriesProductSingle, setCategoriesSingleStatus } =
  categorySlice.actions;

export default categorySlice.reducer;

export const getCategories = () => {
  return async (dispatch) => {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${apiURL}categories`);
      const data = await response.json();
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const getProductsByCategory = (categoryID, dataType) => {
  return async (dispatch) => {
    if (dataType === "all") dispatch(setCategoriesAllStatus(STATUS.LOADING));
    if (dataType === "single") dispatch(setCategoriesSingleStatus(STATUS.LOADING));
    try {
      const response = await fetch(`${apiURL}categories/${categoryID}/products`);
      const data = await response.json();
      if (dataType === "all") {
        dispatch(setCategoriesProductAll(data.slice(0, 10)));
        dispatch(setCategoriesAllStatus(STATUS.IDLE));
      }
      if (dataType === "single") {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)));
        dispatch(setCategoriesSingleStatus(STATUS.IDLE));
      }
    } catch (error) {
      if (dataType === "all") dispatch(setCategoriesAllStatus(STATUS.ERROR));
      if (dataType === "single") dispatch(setCategoriesSingleStatus(STATUS.ERROR));
    }
  };
};
