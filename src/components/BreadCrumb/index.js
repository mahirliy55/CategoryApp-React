// * React Imports
import React from "react";

const BreadCrumb = ({ text }) => {
  return (
    <div className="border-bottom">
      <nav aria-label="breadcrumb border-bottom">
        <div className="container m-auto p-0">
          <ol className="breadcrumb bg-white mb-0 py-4">
            <li
              className="breadcrumb-item active text-dark h5 font-weight-normal"
              aria-current="page"
            >
              {text}
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default BreadCrumb;
