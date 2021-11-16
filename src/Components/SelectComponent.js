import React, { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "../Styles/SelectComponent.scss";

function SelectComponent({ onSelectComponentName, setOnSelectComponentName }) {
  const components = [
    { displayName: "App Button", key: "AppButton" },
    { displayName: "Check Box", key: "CheckBox" },
    { displayName: "Dialog Control", key: "DialogControl" },
    { displayName: "Radio Button", key: "RadioButton" },
    { displayName: "Toggle Button", key: "ToggleButton" },
    { displayName: "Time Picker", key: "TimePicker" },
    { displayName: "Form Component", key: "FormComponent" },
    { displayName: "Udf Selector", key: "UdfSelector" },
    { displayName: "User Selection Widget", key: "UserSelectionWidget" },
    { displayName: "Report Widget", key: "ReportWidget" },
    { displayName: "Progress Element", key: "ProgressElement" },
    { displayName: "Radio Button & Text field", key: "RadioText" },
  ];

  const handleComponentClick = (key) => {
    setOnSelectComponentName(key);
  };

  return (
    <div className="left-panel-contents">
      <ol>
        <Scrollbars
          autoHeight={true}
          autoHeightMax={550}
          autoHide
          hideTracksWhenNotNeeded={true}
        >
          <div className="component-list">
            {components.map((component, index) => {
              return (
                <li
                  key={component.key}
                  onClick={() => handleComponentClick(component.key)}
                  className={
                    onSelectComponentName === component.key && "active"
                  }
                >
                  {component.displayName}
                </li>
              );
            })}
          </div>
        </Scrollbars>
      </ol>
    </div>
  );
}
export default SelectComponent;
