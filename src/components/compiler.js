import React from "react";
import uniqid from "uniqid";

const Compiler = (props) => {
  const { bio } = props;

  return (
    <div className="">
      {bio.map((bio) => {
        return <div key={uniqid()}>{bio.fullName}</div>;
      })}
    </div>
  );
};

export default Compiler;
