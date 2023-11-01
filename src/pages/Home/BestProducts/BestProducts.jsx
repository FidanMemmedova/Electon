import React from "react";
import productCardImage1 from "./../../../components/img/bestProductImage1.png";
import productCardImage2 from "./../../../components/img/bestProductImage2.png";
import productCardImage3 from "./../../../components/img/bestProductImage3.png";
import "./BestProducts.css";
const BestProducts = () => {
  return (
    <div>
      <div className="productCards">
        <div className="productCard">
          <img src={productCardImage1} alt="productImage" />
          <div className="productCardText">
            <p>Speaker</p>
            <span>(6 items)</span>
          </div>
        </div>
        <div className="productCard">
          <img src={productCardImage2} alt="productImage" />
          <div className="productCardText">
            <p>Speaker</p>
            <span>(6 items)</span>
          </div>
        </div>
        <div className="productCard">
          <img src={productCardImage3} alt="productImage" />
          <div className="productCardText">
            <p>Speaker</p>
            <span>(6 items)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
