import { ToggleButton, ToggleSelect } from "disprzcomponents";
import { Toast } from "disprzcomponents";
import { useState } from "react";
const DisplayToggleButton = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <div className="toggle-container">
      <ToggleButton
        {...args}
        checked={checked}
        onChange={(...params) => {
          setChecked(params[0].target.checked);
        }}
      />
      <ToggleSelect
        items={[
          {
            id: "id1",
            name: "Toggle select 1",
          },
          {
            id: "id2",
            name: "Toggle select 2",
          },
        ]}
        onClick={function noRefCheck() {}}
      />
    </div>
  );
};
export default DisplayToggleButton;
