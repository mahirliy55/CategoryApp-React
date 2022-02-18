// * React Imports
import React, { useEffect } from "react";

// * React Router-DOM Imports
import { useParams } from "react-router-dom";

// * Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { productFetch } from "../../redux/actions/ProductAction";
import { addFavorite } from "../../redux/actions/FavoriteAction";

// * Assets Import
import cardDetailImg from "../../assets/images/CardDetailImg.svg";
import Quest from "../../assets/images/question.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, isError, errors } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(productFetch(id));
  }, [dispatch, id]);

  const handleClick = () => {
    dispatch(addFavorite(product?.id));
  };

  return (
    <div className="container">
      <div className="card mb-3 mt-5" style={{ maxWidth: "100%" }}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              src={
                product?.productImage
                  ? `http://localhost:3000${product?.productImage}`
                  : cardDetailImg
              }
              alt="..."
              className="w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className="card-title mt-3 mb-0">{product?.name}</h3>
              <p className="card-text text-secondary">Kategori Adı</p>
              <p className="card-text text-secondary mt-2">
                {product?.description}
              </p>
              <span className="mt-2">{product?.price}₺</span>
              <div className="mt-4">
                <img src={Quest} alt="" className="mr-1" />
                {product?.isFavorite ? (
                  <span
                    onClick={() => console.log("remove")}
                    className="favorite__btn"
                  >
                    Remove to Favorites
                  </span>
                ) : (
                  <span
                    onClick={() => handleClick()}
                    className="favorite__btn"
                  >
                    Add to Favorites
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
