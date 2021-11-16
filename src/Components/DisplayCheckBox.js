import { useState,useEffect} from "react";
import "../Styles/ComponentDisplayPanel.scss";
import { Checkbox } from "disprzcomponents";
import { AppButton } from "disprzcomponents";
import { DialogControl } from "disprzcomponents";

export default function DisplayCheckBox(){
    
    
    const [checkBoxArray,setCheckBoxArray]=useState([
        {label:"CheckBox-1",selectState:false},
        {label:"CheckBox-2",selectState:false},
        {label:"CheckBox-3",selectState:false}
    ])
    const [showDialogControl,setShowDialogControl]=useState(false);
    const [selectedArray,setSelectedArray]=useState([]);
    const [finalArray,setFinalArray]=useState([]);
    let dialogContent= `YOU SELECTED : ${finalArray}`;
    
    //to retrieve "label" from selectedArray
    useEffect(()=>
    {  let emptyArray=[];
       for(let i=0;i<selectedArray.length;i++){
            emptyArray.push(selectedArray[i].label)
       }
        setFinalArray(emptyArray);
    }
    ,[selectedArray])

    const hideDialogControl=()=>
    {
        setShowDialogControl(false);
        setFinalArray([])
    };

    const submitForm=()=>
    {
        setShowDialogControl(true)
        checkBoxArray.map((element,index)=>{
            return element.selectState=false;
          }
         )
       
    };
 //check the state and setting selectedArray if state is true 
    function handleChange(index,element){
     const newArray=[...checkBoxArray];
       if(element.selectState===false){
            newArray[index].selectState=true;
       }else{
           newArray[index].selectState=false;
       }
       setCheckBoxArray(newArray);

     const filteredArray=checkBoxArray.filter((element,index)=>{
        return checkBoxArray[index].selectState===true;
        }
      )
    setSelectedArray(filteredArray);
    };

  return(
    <div className="checkbox-container">
     {checkBoxArray.map((element,index)=>
        {
        return (
             <Checkbox 
               label={checkBoxArray[index].label} 
               onChange={()=>handleChange(index,element)}
               value={checkBoxArray[index].selectState}
             />)
        }
       )
     }
     <AppButton buttonLabel="Submit" clickHandler={submitForm}/>
        {showDialogControl && (
            <DialogControl 
            ctrClass={"dialog"} 
            showOkButton={true} 
            showCloseButton={true} 
            content={dialogContent}
            title={"Alert"} 
            onCloseButtonClick={hideDialogControl} 
            onOkButtonClick={hideDialogControl}> 
            </DialogControl>
        )}
        
    </div>
    )

}