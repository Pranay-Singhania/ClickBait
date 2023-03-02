import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/ProductSlice";

import ProductList from "../productList/ProductList";

const AllProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const status = useSelector((state) => state.product.status);

  useEffect(() => {
    products.length === 0 && dispatch(getProducts());
    console.log("useEffect fired prod");
  }, [dispatch]);

  return (
    <>
      <ProductList products={products} status={status} />
    </>
  );
};

export default AllProductList;
