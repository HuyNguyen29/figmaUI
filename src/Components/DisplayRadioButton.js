import { RadioButton } from "disprzcomponents";
import { AppButton } from "disprzcomponents";
import { DialogControl } from "disprzcomponents";
import { useState } from "react";

export default function DisplayRadioButton(){
    
    const [showDialogControl,setShowDialogControl]=useState(false)
    const radioButtonArray=
    [
      {id:"option1",label:"Option 1",name:"option"},
      {id:"option2",label:"Option 2",name:"option"},
      {id:"option3",label:"Option 3",name:"option"}
    ]
  const handleRadioChange=()=>{
    console.log("radio")
  }
  return(
   <div className="radio-button-container">  
     <RadioButton
      onRadioChange={()=>handleRadioChange()}
      radioGroups={radioButtonArray}
      />

     <AppButton
     buttonLabel="Submit"
     clickHandler={()=>setShowDialogControl(true)}
     />

     {showDialogControl && (
      <DialogControl
      title={"Alert"}
      content={"Submitted"}
      onOkButtonClick={()=>setShowDialogControl(false)}
      >
     </DialogControl>
     )}
   </div>
  )
}