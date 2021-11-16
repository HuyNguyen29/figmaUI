import React, { useState } from "react";
import {AppButton} from "disprzcomponents";
import { DialogControl } from "disprzcomponents";


const DisplayAppButtons=()=>{
    const [hasClickedButton,setHasClickedButton]=useState(false)

    function onClick(){
        setHasClickedButton(true)
    };

    function hideDialogControl(){
        setHasClickedButton(false)
    };

    let dialogContent="You clicked a button";

    return(
     <div className="buttons">
                
                <AppButton
                buttonLabel="Primary Button"
                clickHandler={onClick}
                />
               
               <AppButton
               buttonLabel="Outlined Button"
               clickHandler={onClick}
               type="outlined"
               />
               
               <AppButton
               buttonIconCls="icon-search"
               buttonLabel="Icon Contained"
               clickHandler={onClick}
               type="icon-contained primary"
               />
               
              <AppButton
              buttonIconCls="icon-search"
              buttonLabel="Plain Button"
              clickHandler={onClick}
              type="plain"
              />

         {hasClickedButton && (
             <DialogControl ctrClass={"dialog"} 
             showOkButton={true} 
             showCloseButton={true} 
             content={dialogContent} 
             title={"Alert"} 
             onCloseButtonClick={hideDialogControl} 
             onOkButtonClick={hideDialogControl}> 
             </DialogControl> )
         }
           
     </div> 
    ) 
}
export default DisplayAppButtons;
        

                
               
                