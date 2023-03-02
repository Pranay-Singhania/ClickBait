import React, { useEffect, useState } from "react";
import "./Search.css";
import { setModalData, setIsModalVisible } from "../../store/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";
import { searchAPI } from "../../utils/apiURL";
import { cacheResults } from "../../store/SearchSlice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.modal);
  const searchCache = useSelector((state) => state.search);

  const viewModalData = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  };

  // const getSuggestions = (products, searchTerm) => {
  //   return products?.filter((prod) => prod.title.toLowerCase().includes(searchTerm.toLowerCase()));
  //   fetch({ searchAPI }).;
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchTerm]) setSuggestions(searchCache[searchTerm]);
      else getSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const getSuggestions = async () => {
    if (searchTerm.length === 0) return;
    const data = await fetch(searchAPI + searchTerm);
    const json = await data.json();
    setSuggestions(json);
    dispatch(
      cacheResults({
        [searchTerm]: json,
      })
    );
  };

  return (
    <>
      {isModalVisible && <SingleProduct />}
      <form className="d-flex nav-search" role="search" onSubmit={(e) => e.preventDefault()}>
        <div className="input-box">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          {searchTerm && (
            <div className={`search-suggestions ${showSuggestions ? "" : "input-inactive"}`}>
              {suggestions?.slice(0, 5).map((prod) => (
                <div
                  key={prod.id}
                  className="search-suggestions-items"
                  onMouseDown={() => {
                    setShowSuggestions(false);
                    viewModalData(prod);
                  }}>
                  <span>{prod.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="nav_search_btn" type="submit">
          <i className="fas fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default Search;
