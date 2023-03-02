import React, { useEffect } from "react";
import "./Category.css";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../../utils/status";
import { Link } from "react-router-dom";
import Error from "../../components/Error/Error";
import Loader from "../../components/loader/Loader";
import { getCategories } from "../../store/CategorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.data);
  const status = useSelector((state) => state.category.status);

  useEffect(() => {
    categories.length === 0 && dispatch(getCategories());
    console.log("useEffect fired category");
  }, [dispatch]);

  if (status === STATUS.ERROR) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;

  console.log("category");

  return (
    <section className="categories">
      {categories.length !== 0 && (
        <div className="container" style={{ maxWidth: "72rem" }}>
          <div className="categories-content">
            <div className="section-title">
              <h3>CATEGORY</h3>
            </div>
            <div className="category-items">
              {categories.slice(0, 5).map((category) => (
                <Link to={`category/${category.id}`} key={category.id} style={{ textDecoration: "none" }}>
                  <div className="category-item">
                    <div className="category-item-img">
                      <img src={category.image} alt="" />
                    </div>
                    <div className="category-item-name">
                      <h6>{category.name}</h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Category;
