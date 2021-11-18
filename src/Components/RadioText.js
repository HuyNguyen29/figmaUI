import { RadioButton, InputTextField } from "disprzcomponents";

export default function RadioText() {
  return (
    <div className="radio-text-container">
      <RadioButton
        onRadioChange={function noRefCheck() {}}
        radioGroups={[
          {
            id: "option1",
            label: "Option 1",
            name: "option",
          },
          {
            id: "option2",
            label: "Option 2",
            name: "option",
          },
        ]}
      />
      <InputTextField onChange={function noRefCheck() {}} />
      <InputTextField
        onChange={function noRefCheck() {}}
        type={"password"}
        helpText={"Specify help text for the text box"}
        label={"Password"}
      />
      <InputTextField
        onChange={function noRefCheck() {}}
        type={"email"}
        // errorMessage={"Not an email"}
        label={"Email"}
      />
    </div>
  );
}
