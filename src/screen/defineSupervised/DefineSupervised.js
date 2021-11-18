import React, { useState } from "react";
import { InputTextField } from "disprzcomponents";
import "./DefineSupervised.scss";
import img from "../../asset/img.jpeg";
function DefineSupervised() {
  const imgData = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      Header
      <div className="define-container">
        <div className={"title"}>Define your Supervised OJT</div>
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Name
        </div>
        <InputTextField onChange={function noRefCheck() {}} />
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Description
        </div>
        <InputTextField onChange={function noRefCheck() {}} />
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Image
        </div>
        <div style={{ display: "flex", width: "50%" }}>
          <div>
            {imgData.map((item, i) => (
              <img
                src={img}
                style={{ height: 120, width: 130, borderRadius: 10 }}
                alt="img"
              />
            ))}
          </div>
          <div style={{ display: "flex", width: "50%" }}>select a poster</div>
        </div>
      </div>
    </div>
  );
}

export default DefineSupervised;
