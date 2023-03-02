import React from "react";
import { STATUS } from "../../utils/status";
import "./ProductList.css";
import "../singleCategory/SingleCategory.css";
import { setModalData, setIsModalVisible } from "../../store/ModalSlice";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SingleProduct from "../singleProduct/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error/Error";
import Loader from "../loader/Loader";

const ProductList = ({ products, status }) => {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.modal);

  const viewModalData = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };

  if (status === STATUS.ERROR) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;
  console.log("productlist");

  return (
    <>
      {products.length !== 0 && (
        <section className="product" id="products">
          {isModalVisible && <SingleProduct />}

          <div className="container" style={{ maxWidth: "1200px" }}>
            <div className="product-content">
              <div className="section-title">
                <h3>Our Products</h3>
              </div>
              <div className=" flexcenter product-items">
                {products?.slice(0, 50).map((product) => (
                  <div className="product-item" key={product.id} onClick={() => viewModalData(product)}>
                    <div className="product-item-img">
                      <img src={product.images[0]} alt="" />
                      <div className="product-item-cat">{product.category.name}</div>
                    </div>
                    <div className="product-item-body">
                      <h6 className="product-item-title">{product.title}</h6>
                      <div className="flexrow">
                        <div className="product-item-price-icon-body flexcenter">
                          <CurrencyRupeeIcon className="product-item-price-icon" />
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
      )}
    </>
  );
};

export default ProductList;
