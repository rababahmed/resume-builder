import React, { useState } from "react";
import Compiler from "./compiler";
import Main from "./main";

export default function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleChecked = () => setToggle((toggle) => !toggle);
  return (
    <div>
      <div className="toggle-wrapper">
        <button className="toggle" type="button" onClick={toggleChecked}>
          Toggle
        </button>
      </div>
      {toggle && <Main />}
      {!toggle && <Compiler />}
    </div>
  );
}
