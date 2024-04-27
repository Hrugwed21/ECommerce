import React,{ Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from '../layout/Header/MetaData';
import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector,useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from 'react-alert';
import Header from '../layout/Header/Header.js';
import UserOptions from '../layout/Header/UserOptions.js';

const Home = () => {

  const alert= useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(()=> {
    if (error) {
      alert.error(error);
     dispatch(clearErrors);
    }
    dispatch(getProduct());
  },[dispatch, error, alert]);

  return (
    <Fragment>
      <Header/>
      {loading ? (
        <Loader/>
      ) : (
      <Fragment>
        <MetaData title="Ecommerce"/>
        <div className="banner">
            
            <div className="nav__logo">
              <h1><span>ECO</span>FUNDS</h1>
            </div>
            
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
            
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          
         <div className="container" id="container">
           {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
         </div>
         
    <section className="section special__offer">
      <div className="offer__container">
        <h1>CROWDFUNDING</h1>
        <p>Help innovators and reaserchers to make our future sustainable.</p>
        <a href='http://127.0.0.1:5500/index2.html'>Donate Here</a>
      </div>
    </section>

    
    </Fragment>
    )}  
    </Fragment>
  )
}

export default Home

