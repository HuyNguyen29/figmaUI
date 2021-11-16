import { InputTextField } from "disprzcomponents";
import { RadioButton } from "disprzcomponents";
import { useState } from "react";
import { DateTimePicker } from "disprzcomponents";
import { AppButton } from "disprzcomponents";
import { DialogControl } from "disprzcomponents";
export default function DisplayFormComponent(){

    const [showDialogControl,setShowDialogControl]=useState(false);
    const [nameValue,setNameValue]=useState("");
    const [passwordValue,setPasswordValue]=useState("");
    const [dialogContent,setDialogContent]=useState("");


    var handleNameChange=function handleChange(value){
     setNameValue(value);
    };
    
    var handlePasswordChange=function handlePasswordChange(value){
     setPasswordValue(value);
    };

function handleSubmit(){
   if (nameValue!=="" && passwordValue!=="")
   {
     setDialogContent("Success")
   }
   else{
     return;
   }
   setShowDialogControl(true);
  }
   
    function handleRadioChange(){
      console.log("radioclick")
    }
 return(
  <div className="form-components-container">
     
       <div className="row">
          <div className="column-1">
            <label>Name</label>
           </div>
          <div className="column-2">
            <InputTextField
              type={"text"}
              label={"Name"}
              required={true}
              onChange={handleNameChange}
            />
          </div>
       </div>
    
    
       <div className="row">
          <div className="column-1">
            <label>Password</label>
          </div>
          <div className="column-2">
            <InputTextField
              type={"password"}
              label={"Password"}
              required={true}
              onChange={handlePasswordChange}
            /> 
         </div>
       </div>

       <div className="row">
          <div className="column-1">
           <label>Gender</label>
           </div>
          <div className="column-2">
             <RadioButton
                radioGroups={
                [{
                  label:"Male",
                  name:"gender",
                  id:"Male",
                },
                { 
                 label:"Female",
                 name:"gender",
                 id:"Female"
                }]
              }
              onRadioChange={handleRadioChange}
             />
           </div>
       </div>
        
        <div className="row">
           <div className="column-1">
            <label>DOB</label>
           </div>
           <div className="column-2">
             <DateTimePicker
               name={"date"}
               label={""}
               selectRange={false}
               selectDuration={false}
             />
           </div>
       </div>
     
         <div className="submit-btn">
            <AppButton
              buttonLabel={"Submit"}
              clickHandler={handleSubmit}
            />
         </div>
        {showDialogControl && (
              <DialogControl
               content={dialogContent}
               onOkButtonClick={()=>setShowDialogControl(false)}
               />
        )}
    
   </div>

    )
}