import React, { useState, useContext, createContext } from "react";
import "../App.scss";
import SelectComponent from "../Components/SelectComponent";
import ComponentDisplayPanel from "../Components/ComponentDisplayPanel";

function MainScreen() {
  const [onSelectComponentName, setOnSelectComponentName] =
    useState("MicroExp");

  return (
    <div className="App">
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
