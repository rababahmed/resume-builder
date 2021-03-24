import React from "react";
import uniqid from "uniqid";

const Compiler = (props) => {
  const { bio } = props;

  return (
    <ul>
      {bio.map((fullName) => {
        return <li key={uniqid()}>{fullName}</li>;
      })}
    </ul>
  );
};

export default Compiler;
