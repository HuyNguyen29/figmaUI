import React, { useState } from "react";
import "../Styles/ComponentDisplayPanel.scss";
import { MultiSelectDropDown } from "disprzcomponents";
import MicroExp from "./MircoExp";
import { useHistory } from "react-router-dom";

export default function ComponentDisplayPanel({ onSelectComponentName }) {
  const history = useHistory();
  //To choose correspoding component
  const switchComponent = () => {
    switch (onSelectComponentName) {
      case "MicroExp":
        return <MicroExp />;
      default:
        return null;
    }
  };

  const onCreateExpClicked = () => {
    history.push("/mircoExp");
  };

  return (
    <div className="right-panel-contents">
      <div className="right-panel-header">
        <MultiSelectDropDown
          items={[
            {
              label: "Value 1",
              value: "val1",
            },
            {
              label: "Value 2",
              value: "val2",
            },
          ]}
          disableSearch
          onSelect={function noRefCheck() {}}
          placeholder="Select value"
          values={[
            {
              label: "Value 1",
              value: "val1",
            },
          ]}
        />
        <div className="right-panel-header-right">
          <MultiSelectDropDown
            items={[
              {
                label: "Value 1",
                value: "val1",
              },
              {
                label: "Value 2",
                value: "val2",
              },
            ]}
            disableSearch
            onSelect={function noRefCheck() {}}
            placeholder="Select value"
            values={[
              {
                label: "Value 1",
                value: "val1",
              },
            ]}
          />

          <button onClick={onCreateExpClicked} className={"button-create"}>
            Create new microexperience
          </button>
        </div>
      </div>
      {switchComponent()}
    </div>
  );
}
