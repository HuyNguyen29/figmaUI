import React, { useContext, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import images from "../asset/image";
import "../Styles/SelectComponent.scss";
import IconMicro from "../asset/IconMirco";
function SelectComponent({ onSelectComponentName, setOnSelectComponentName }) {
  const components = [{ displayName: "Micro experiences", key: "MicroExp" }];

  const handleComponentClick = (key) => {
    setOnSelectComponentName(key);
  };

  return (
    <div className="left-panel-contents">
      <ol>
        <div>
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
                  <IconMicro
                    color={
                      onSelectComponentName === component.key
                        ? "white"
                        : "#00be6e"
                    }
                  />
                  <div style={{ marginLeft: 10 }}>{component.displayName}</div>
                </li>
              );
            })}
          </div>
        </div>
      </ol>
    </div>
  );
}
export default SelectComponent;
