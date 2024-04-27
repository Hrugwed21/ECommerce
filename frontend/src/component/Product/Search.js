import React, { useState, Fragment } from "react";
import MetaData from "../layout/Header/MetaData";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header/Header";

const Search = ( ) => {
    const [keyword, setKeyword] = useState("");
    const navigation = useNavigate();
  
    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword) {
        navigation(`/products/${keyword}`);
      } else {
        navigation("/products");
      }
    };
  

  return (
    <Fragment>
      <Header/>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
