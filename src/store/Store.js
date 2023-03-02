import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";
import modalReducer from "./ModalSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";
import searchReducer from "./SearchSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalReducer,
    product: productReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
