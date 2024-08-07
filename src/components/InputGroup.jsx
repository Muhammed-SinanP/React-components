import React from "react";

function InputGroup(props){
    return (
        <div className="">
          <label for={props.label}>{props.command}</label>
          <input
            type={props.type}
            className="form-control"
            id={props.label}
            placeholder={props.value}
          />
        </div>
      );
}

export default InputGroup;
