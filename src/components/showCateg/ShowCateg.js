import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategory } from "../../store/CategorySlice";
import SingleCategory from "../singleCategory/SingleCategory";

const ShowCateg = () => {
  const dispatch = useDispatch();
  const productsByCategory = useSelector((state) => state.category.catProductAll);
  const catProductAllStatus = useSelector((state) => state.category.catProductAllStatus);

  useEffect(() => {
    productsByCategory.length === 0 && dispatch(getProductsByCategory(1, "all"));
    productsByCategory.length === 0 && dispatch(getProductsByCategory(2, "all"));
  }, [dispatch]);

  return (
    <>
      {/* category one product */}
      {productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={catProductAllStatus} />}

      {/* category two products */}
      {productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={catProductAllStatus} />}
    </>
  );
};

export default ShowCateg;
