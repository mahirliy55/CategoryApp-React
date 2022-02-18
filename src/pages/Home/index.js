// * React Imports
import React, { useEffect } from "react";

// * Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { categoryFetch } from "../../redux/actions/CategoryAction";

// * Component Imports
import Slide from "../../components/Slide";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errors } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(categoryFetch());
  }, [dispatch]);
  console.log(data);

  return (
    <div className="container p-0">
      <Slide />
      <h5 className="text-center mt-5 font-weight-light">Kategoriler</h5>
      <div className="row justify-content-center">
        {data?.map((item) => (
          <Link
            to={`/categories/${item?.id}/products`}
            state={{ name: item?.name }}
            key={item?.id}
          >
            <Button text={item?.name} key={item?.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
