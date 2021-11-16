import { TimePicker } from "disprzcomponents"
import { DateTimePicker } from "disprzcomponents"
import { useState } from "react"
import moment from "moment";


export default function DisplayDateTimePicker(){
  const [startTimeValue,setStartTimeValue]=useState("");
  const [endTimeValue,setEndTimeValue]=useState("");
  const [dateValue,setDateValue]=useState("");
 
  let content="";
  if((startTimeValue!=="")&&(endTimeValue!=="")&&(dateValue!==""))
  {
    content=`DATE :  ${moment(dateValue).format("DD/MM/YYYY")} , TIME : ${startTimeValue}-${endTimeValue}`;
  }
    
  return(
    <div className="display-timepicker-container">
      <label>Date</label>
      <DateTimePicker
               name={"date"}
               label={""}
               selectRange={false}
               selectDuration={false}
               onChange={(value)=>setDateValue(value)}
                />
         <label>From</label>  
        <TimePicker
        label=""
        selectTime={(value)=>setStartTimeValue(value)}
      />
      <label>To</label>
       <TimePicker
        label=""
        selectTime={(value)=>setEndTimeValue(value)}
      />
    <div className="date-time-info">
    <p >{content}</p>
     </div> 

    </div>
    )
}