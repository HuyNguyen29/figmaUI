import React, { useState } from "react";
import "../Styles/ComponentDisplayPanel.scss";
import DisplayAppButtons from "./DisplayAppButtons";
import DisplayCheckBox from "./DisplayCheckBox";
import DisplayDialogControl from "./DisplayDialogControl";
import { DateTimePicker } from "disprzcomponents";
import DisplayRadioButton from "./DisplayRadioButton";
import DisplayFormComponent from "./DisplayFormComponent";
import DisplayUdfSelector from "./DisplayUdfSelector";
import DisplayUserSelectionWidget from "./DisplayUserSelectionWidget";
import DisplayToggleButton from "./DisplayToggleButton";
import DisplayReport from "./DisplayReportWidget";
import DisplayTimePicker from "./DisplayTimePicker";
import ProgressElement from "./ProgressElement";
import RadioText from "./RadioText";

export default function ComponentDisplayPanel({ onSelectComponentName }) {
  //To choose correspoding component
  const switchComponent = () => {
    switch (onSelectComponentName) {
      case "AppButton":
        return <DisplayAppButtons />;
      case "CheckBox":
        return <DisplayCheckBox />;
      case "DateTimePicker":
        return (
          <DateTimePicker
            onChange={function noRefCheck() {}}
            selectsRange={false}
          />
        );
      case "DialogControl":
        return <DisplayDialogControl />;
      case "RadioButton":
        return <DisplayRadioButton />;
      case "ToggleButton":
        return <DisplayToggleButton />;
      case "TimePicker":
        return <DisplayTimePicker />;
      case "FormComponent":
        return <DisplayFormComponent />;
      case "UdfSelector":
        return <DisplayUdfSelector />;
      case "UserSelectionWidget":
        return <DisplayUserSelectionWidget />;
      case "ReportWidget":
        return <DisplayReport />;
      case "ProgressElement":
        return <ProgressElement />;
      case "RadioText":
        return <RadioText />;
    }
  };
  return <div className="right-panel-contents">{switchComponent()}</div>;
}
