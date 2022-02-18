// * React Imports
import React, { useEffect } from "react";

// * React-Router Imports
import { Link } from "react-router-dom";

// * Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { slideFetch } from "../../redux/actions/SlideAction";

const Slide = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, errors } = useSelector(
    (state) => state.slide
  );

  useEffect(() => {
    dispatch(slideFetch());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div
          data-interval="1000"
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {data?.map((item, index) => (
              <Link to={`/products/${item?.productId}`} key={item?.productId}>
                <div
                  className={
                    index == 1 ? "carousel-item active" : "carousel-item"
                  }
                >
                  <img
                    className="d-block w-100"
                    src={`http://localhost:3000${item?.image}`}
                    alt="First slide"
                  />
                </div>
              </Link>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slide;
