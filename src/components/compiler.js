import React from "react";
import uniqid from "uniqid";

const Compiler = (props) => {
  const { bio } = props;
  return (
    <div className="preview-wrapper">
      <div className="bio-wrapper">
        <div>{props.data.fullName}</div>
        <div>{props.data.email}</div>
        <div>{props.data.phone}</div>
        <div>{props.data.location}</div>
      </div>
    </div>
  );
};

export default Compiler;
