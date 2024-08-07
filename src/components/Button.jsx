import React from "react";

function Button(props) {
  return (
    <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
      {props.value}
    </button>
  );
}

export default Button;
