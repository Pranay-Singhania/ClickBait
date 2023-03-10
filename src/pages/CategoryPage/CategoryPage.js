import React, { useEffect } from "react";
import ProductList from "../../components/productList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategory } from "../../store/CategorySlice";
import { useParams } from "react-router-dom";
import Navigator from "../../components/navigator/Navigator";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.category.catProductSingle);
  const status = useSelector((state) => state.category.catProductSingleStatus);

  useEffect(() => {
    (products.length === 0 || id) && dispatch(getProductsByCategory(id, "single"));
  }, [id]);

  return (
    <div className="category-page">
      <Navigator categoryName={products[0] && products[0].category.name} />
      <ProductList products={products} status={status} />
    </div>
  );
};

export default CategoryPage;
