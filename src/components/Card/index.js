// * React Imports
import React from "react";

// * React Router Imports
import { Link } from "react-router-dom";

// * Assets Imports
import CardImg from "../../assets/images/cardImg.svg";
import Quest from "../../assets/images/question.svg";

const Card = ({ product, categoryName }) => {
  return (
    <Link to={`/products/${product?.id}`} className="text-decoration-none">
      <div className="card mt-5 " style={{ width: "16rem", margin: "0 auto" }}>
        <img
          src={
            product?.productImage
              ? `http://localhost:3000${product?.productImage}`
              : CardImg
          }
          className="card-img-top"
          height="250"
          alt={product?.name}
        />
        <div className="card-body ">
          <p className="card-title m-0 text-dark">{product?.name}</p>
          <span className="card-text text-secondary small">{categoryName}</span>
          <div className="row justify-content-between align-items-center container mx-auto mt-3 p-0">
            <p className="price m-0 text-dark">{product?.price}₺</p>
            <img src={Quest} alt="Questions" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
