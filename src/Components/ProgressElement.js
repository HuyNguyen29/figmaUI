import { ProgressDisplayElement } from "disprzcomponents";
import { useState } from "react";
import moment from "moment";

export default function ProgressElement() {
  return (
    <div className="progress-element-container">
      <ProgressDisplayElement
        elementCls="ctl_class"
        height={100}
        value={25}
        width={100}
        setPercentageValue={false}
      />
      <ProgressDisplayElement
        elementCls="ctl_class"
        height={50}
        setCompletionAccents={false}
        value={75}
        width={50}
        progressElementType={"Line"}
        setPercentageValue={false}
        trailAccentColor={'green'}
      />
      <ProgressDisplayElement
        elementCls="ctl_class"
        height={100}
        setCompletionAccents={false}
        textValue="SemiCircle"
        value={25}
        width={100}
        progressElementType={"SemiCircle"}
        setPercentageValue={false}
      />
    </div>
  );
}
