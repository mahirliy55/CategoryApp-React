// * React Imports
import React, { useEffect } from "react";

// * React-Router Imports
import { useParams, useLocation } from "react-router-dom";

// * Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { productsFetch } from "../../redux/actions/ProductAction";

// * Component Imports
import Card from "../../components/Card";
import BreadCrumb from "../../components/BreadCrumb";

const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errors } = useSelector(
    (state) => state.product
  );
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    dispatch(productsFetch(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <BreadCrumb text={state?.name} />
      <div className="container row m-auto p-0 ">
        {data?.map((item) => (
          <div className="col-12 col-md-3 col-ld-3" key={item?.id}>
            <Card product={item} categoryName={state?.name} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Products;
