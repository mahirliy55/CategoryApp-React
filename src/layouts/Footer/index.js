// * React Imports
import React from "react";

// * Assets Imports
import Quest from "../../assets/images/question.svg";

const Footer = () => {
  return (
    <footer className="page-footer font-small border-top mt-5">
      <div className="container row align-items-center justify-content-between m-auto flex-column flex-md-row flex-ld-row">
        <div className="footer-copyright text-center py-3">
          Katalog App © All rights reserved.
        </div>
        <div className="row">
          <img src={Quest} alt="Questions" />
          <img src={Quest} alt="Questions" />
          <img src={Quest} alt="Questions" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
