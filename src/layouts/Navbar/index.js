// * React Imports
import React from "react";

// * React Router Imports
import { Link, NavLink } from "react-router-dom";

// * Assets Imports
import Quest from "../../assets/images/question.svg";

// * Styles Imports
import "../../assets/scss/layout/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg border-bottom">
      <div className="container px-3">
        <span className="navbar-brand text-dark font-weight-bold">
          Katalog App
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item mr-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "no-active"
                }
              >
                Ana sayfa <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">Ürünler</li>
          </ul>
          <Link to="/favorites" className="text-dark text-decoration-none">
            <img src={Quest} alt="Questions" />
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
