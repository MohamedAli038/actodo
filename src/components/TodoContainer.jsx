import { useState } from "react"
import AddToDoForm from "./AddToDoForm"
import ToDoList from "./ToDoList"
function TodoContainer()
{
  
  const [activityArr, setactivityArr] = useState([
    {
        id:1,
        activity:"Go for a walk"
    },
    {
        id:2,
        activity:"Have a BreakFast"
    },
    {
        id:3,
        activity:"Take a shower"
    }
    

])
return(
    <div>

        <div className="flex gap-5 flex-wrap">

        <AddToDoForm  activityArr={activityArr} setactivityArr={setactivityArr}/>
        <ToDoList activityArr={activityArr} setactivityArr={setactivityArr}/>


  </div>
  </div>
)
}

export default TodoContainer