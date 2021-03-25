import React from "react";
import uniqid from "uniqid";

const Compiler = (props) => {
  return (
    <div className="preview-wrapper">
      <div className="bio-wrapper">
        <div className="personal-wrapper">
          <div className="p-name">{props.data.fullName}Rabab Ahmed</div>
          <div className="p-pdets">{props.data.email}rababahmed6@gmail.com</div>
          <div className="p-pdets">{props.data.phone}+1-800-888-0000</div>
          <div className="p-pdets">{props.data.location}Austin, TX</div>
        </div>
        <div className="work-wrapper">
          <div className="p-w1">Work Experience</div>
          <div className="p-cname">{props.data.cName}XYZ, Inc.</div>
          <div className="p-cdets">
            {props.data.cDes}Chief Technology Officer
          </div>
          <div className="datewrapper">
            <div className="p-cdate1">{props.data.cStd}01/02/2020 -</div>
            <div className="p-cdate2">{props.data.cEnd}01/02/2020</div>
          </div>
          <div className="p-cdets">
            {props.data.cDetails}Worked on building their core SaaS product
          </div>
        </div>
        <div className="edu-wrapper">
          <div className="p-e1">Education</div>
          <div className="p-ename">
            {props.data.eName}Massachusetts Institute of Technology
          </div>
          <div className="p-edeg">
            {props.data.eDeg}Bsc, Software Engineering
          </div>
          <div className="datewrapper">
            <div className="p-edate1">{props.data.eStd}01/02/2020 -</div>
            <div className="p-edate2">{props.data.eEnd}01/02/2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
