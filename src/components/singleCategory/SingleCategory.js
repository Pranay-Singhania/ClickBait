import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./SingleCategory.css";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";
import { setModalData, setIsModalVisible } from "../../store/ModalSlice";
import Error from "../Error/Error";
import Loader from "../loader/Loader";
import { STATUS } from "../../utils/status";
// import { Diversity1 } from '@mui/icons-material';

const SingleCategory = ({ products, status }) => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.modal);

  const viewModalData = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };
  if (status === STATUS.ERROR) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;

  return (
    <section className="cat-single">
      {isModalVisible && <SingleProduct />}

      <div className="container" style={{ maxWidth: "1200px" }}>
        <div className="cat-single-content">
          <div className="section-title">
            <h3 style={{ color: "midnightblue", textTransform: "uppercase" }}>{products[0].category.name}</h3>
          </div>
          <div className="flexcenter product-items">
            {products.map((product) => (
              <div className="product-item" key={product.id} onClick={() => viewModalData(product)}>
                <div className="product-item-img" style={{ position: "relative" }}>
                  {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> */}
                  <img src={product.images[0]} alt="" loading="lazy" />
                  <div className="product-item-cat">{product.category.name}</div>
                  {/* </div> */}
                </div>
                <div className="product-item-body" style={{ padding: "12px 0" }}>
                  <h6 className="product-item-title">{product.title}</h6>
                  <div style={{ display: "flex", flexdirection: "row" }}>
                    <div className="product-item-price-icon-body flexcenter">
                      <CurrencyRupeeIcon className="product-item-price-icon" style={{ fontSize: "large", display: "flex" }} />
                    </div>
                    <div className="product-item-price flexcenter">{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
