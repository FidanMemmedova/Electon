import React from "react";

const PopularProductsHeader = () => {
  return (
    <div>
      <div className="popularProductsHeader">
        <h2>Popular Products</h2>
        <div className="popularProductsCategories">
          <button>Cameras</button>
          <button>Laptops</button>
          <button>Tablets</button>
          <button>Mouse</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProductsHeader;
