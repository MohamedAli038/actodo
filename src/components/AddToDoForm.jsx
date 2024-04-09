import { useState } from "react"

function AddToDoForm(props)
{
    const activityArr =props.activityArr
    const setactivityArr = props.setactivityArr

    const[newactivity,setnewactivity] = useState("")

    function handlechange(evt)
    {
        setnewactivity(evt.target.value)
    }

    function addActivity()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

return(
    <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-medium">Manage Activites</h1>

    <div>
    <input type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" value={newactivity} onChange={handlechange}></input>
    <button className="bg-black text-white border border-black p-1" onClick={addActivity} >Add</button>
    </div>
</div>

)
}

export default AddToDoForm