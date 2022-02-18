// * React Imports
import React, { useEffect } from "react";

// * React-Router Imports
import { Link } from "react-router-dom";

// * Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { favoritesFetch } from "../../redux/actions/FavoriteAction";

// * Component Imports
import Card from "../../components/Card";
import BreadCrumb from "../../components/BreadCrumb";

const Favorites = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errors } = useSelector(
    (state) => state.favorite
  );

  useEffect(() => {
    dispatch(favoritesFetch());
  }, [dispatch]);

  return (
    <React.Fragment>
      <BreadCrumb text="Favorites" />
      <div className="container row m-auto p-0 ">
        {data?.map((product) => (
          <div className="col-12 col-md-3 col-ld-3" key={product?.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Favorites;
