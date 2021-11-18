import React, { useState, useContext, createContext } from "react";
import "../App.scss";
import SelectComponent from "../Components/SelectComponent";
import ComponentDisplayPanel from "../Components/ComponentDisplayPanel";
import { ReactComponent as AppIcon } from "../AppIcons.svg";

function MainScreen() {
  const [onSelectComponentName, setOnSelectComponentName] =
    useState("AppButton");

  return (
    <div className="App">
      <AppIcon />
      <div className="content-wrapper">
        <div className="left-panel-container">
          <SelectComponent
            onSelectComponentName={onSelectComponentName}
            setOnSelectComponentName={setOnSelectComponentName}
          />
        </div>
        <div className="right-panel-container">
          <ComponentDisplayPanel
            onSelectComponentName={onSelectComponentName}
          />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
