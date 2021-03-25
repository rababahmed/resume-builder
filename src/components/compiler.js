import React from "react";
import uniqid from "uniqid";
import ReactToPdf from "react-to-pdf";

const Compiler = (props) => {
  const ref = React.createRef();
  return (
    <div className="preview-wrapper">
      <div ref={ref} className="bio-wrapper">
        <div className="personal-wrapper">
          <div className="p-name">{props.data.fullName}</div>
          <div className="divider"></div>
          <div className="p-pdets">{props.data.email}</div>
          <div className="p-pdets">{props.data.phone}</div>
          <div className="p-pdets">{props.data.location}</div>
        </div>
        <div className="work-wrapper">
          <div className="p-w1">Work Experience</div>
          <div className="divider"></div>
          <div className="p-cname">{props.data.cName}</div>
          <div className="p-cdets">{props.data.cDes}</div>
          <div className="datewrapper">
            <div className="p-cdate1">{props.data.cStd} -</div>
            <div className="p-cdate2">{props.data.cEnd}</div>
          </div>
          <div className="p-cdets">{props.data.cDetails}</div>
        </div>
        <div className="edu-wrapper">
          <div className="p-e1">Education</div>
          <div className="divider"></div>
          <div className="p-ename">{props.data.eName}</div>
          <div className="p-edeg">{props.data.eDeg}</div>
          <div className="datewrapper">
            <div className="p-edate1">{props.data.eStd} -</div>
            <div className="p-edate2">{props.data.eEnd}</div>
          </div>
        </div>
      </div>
      <ReactToPdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => (
          <button class="print-btn" onClick={toPdf}>
            Generate pdf
          </button>
        )}
      </ReactToPdf>
    </div>
  );
};

export default Compiler;
