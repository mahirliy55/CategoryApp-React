// * React Imports
import React from "react";

// * Styles Imports
import "../../assets/scss/components/button.scss";

const Button = ({ text }) => {
  return (
    <button type="button" className="btn btn-outline-dark mr-3 ml-3 mt-3">
      {text}
    </button>
  );
};

export default Button;
