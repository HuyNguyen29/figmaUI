import { DialogControl } from "disprzcomponents";
import { AppButton } from "disprzcomponents";
import { useState } from "react";
import Scrollbars from "react-custom-scrollbars";


export default function DisplayDialogControl(){
    const [alertDialogControl,setAlertDialogControl]=useState(false);
    const [confirmDialogControl,setConfirmDialogControl]=useState(false);
    const [customDialogControl,setCustomDialogControl]=useState(false);

    let dialogContent=
    <div style={{height:"100px",overflowY:"scroll"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
    
    
   </div>
    
    return(
     <div>
         <AppButton 
         buttonLabel="Alert"
         clickHandler={()=>setAlertDialogControl(true)}
         />
         <AppButton
         buttonLabel="Confirm"
         clickHandler={()=>setConfirmDialogControl(true)}
         />
         <AppButton
         buttonLabel="Custom"
         clickHandler={()=>setCustomDialogControl(true)}
         />

     {alertDialogControl && (
         <DialogControl
         title={"Alert"}
         content={"Ooops! Something Went Wrong"}
         okButtonLabel={"Try Again"}
         onOkButtonClick={()=>setAlertDialogControl(false)}
         >
         </DialogControl>
     )}
     {confirmDialogControl && (
         <DialogControl
         title={"Confirmation"}
         content={"Are You Sure To Delete the Entry?"}
         showOkButton={true}
         showCloseButton={true}
         okButtonLabel={"Confirm"}
         closeButtonLabel={"Cancel"}
         onOkButtonClick={()=>setConfirmDialogControl(false)}
         onCloseButtonClick={()=>setConfirmDialogControl(false)}
         >
         </DialogControl>
     )}
     {customDialogControl && (
         <DialogControl
         title={"Customised DialogBox"}
         content={dialogContent}
         showOkButton={true}
         showCloseButton={true}
         okButtonLabel={"Subscribe"}
         closeButtonLabel={"later"}
         onOkButtonClick={()=>setCustomDialogControl(false)}
         onCloseButtonClick={()=>setCustomDialogControl(false)}
         showHeaderCloseButton={true}
         >

         </DialogControl>
     )}

     </div>
    )
}