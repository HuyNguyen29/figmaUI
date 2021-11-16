import { DialogControl, Toast, AppButton, UdfSelector } from "disprzcomponents";
import { useEffect, useState } from "react";
import "../Styles/ComponentDisplayPanel.scss";

export default function DisplayUdfSelector() {
  const [selectValue, setSelectValue] = useState([]);
  const [showDialogControl, setShowDialogControl] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function onUdfValueSelect(value) {
    setSelectValue(value);
    setShowToast(true);
  }

  const handleSubmit = () => {
    if (selectValue.length > 0) {
      setShowDialogControl(true);
    }
  };

  let dialogContents = "";
  selectValue.length > 0 &&
    selectValue?.forEach((item) => {
      dialogContents += `${item.udfFieldLabel}  is ${item.udfFieldValues
        .map(({ label }) => label)
        .join(",")}\n`;
    });

  if (showDialogControl) {
    return (
      <DialogControl
        content={dialogContents}
        onOkButtonClick={() => setShowDialogControl(false)}
      />
    );
  }

  return (
    <div className="display-udf-container">
      <UdfSelector
        onUdfValueSelect={(value) => onUdfValueSelect(value)}
        selectedUdfValues={selectValue}
        udfCtrCls="ctrl_class"
        udfFetchAPiUrl="https://disprzpipeline.disprz.com/demoservice/api/service/getFilteredData"
        udfPlaceholder="Select value"
        udfValueCtrCls="ctrl_value_class"
        udfValuePlaceholder="Select value 2"
      />
      {showToast ? (
        <Toast
          autoHide
          autoHideTimeOut={2000}
          content={'Added'}
          name="success_toast_html"
          onCancel={() => setShowToast(false)}
          onChange={function noRefCheck() {}}
          position="BOTTOM_RIGHT"
          toastType="SUCCESS"
          header="SUCCESS"
        />
      ) : null}

      <div className="submit-btn">
        <AppButton buttonLabel={"Submit"} clickHandler={handleSubmit} />
      </div>
    </div>
  );
}
