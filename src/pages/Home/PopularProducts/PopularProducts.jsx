import React from "react";
import { PopularProductsHeader } from "./PopularProductsHeader";
import { PopularProductsItems } from "./PopularProductsItems";
import "./PopularProducts.css"

const PopularProducts = () => {
  return (
    <div>
      <div className="popularProducts">
        <div className="container">
          <PopularProductsHeader />
          <PopularProductsItems />
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
