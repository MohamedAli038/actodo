import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props)
{
    /*user enter panra data va we are catching here*/
   
    const navigate = useNavigate()

   const[eusername,setEusername] = useState("")
    const[epassword,setEpasssword] = useState("")
    const[ruser,setRuser] = useState(true)


    const users = props.users
    




function handleUinput(evt)
{
setEusername(evt.target.value)
}

function handlePinput(evt)
{
setEpasssword(evt.target.value)
}


function checkuser()
{

    var userfound = false

users.forEach(function(item){
    if(item.username === eusername && item.password === epassword)
    {
        console.log("login success")
        userfound=true
        navigate("/landing",{state:{user:eusername}})
    }

    if(userfound===false)
    {
        console.log("Login failed")
        setRuser(false)
    }
   
})
}

    return(  <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      <h1 className="text-3xl font-medium">Hey Hi</h1>
    { ruser ?  <p>I help you to manage your activities, Login here!</p> : <p className="text-red-500">Please Sign up before you Login</p> }
    

      <div className="flex flex-col gap-2 my-2">
       <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
       placeholder="username" onChange={handleUinput}></input>

<input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md"
       placeholder="password" onChange={handlePinput}></input>



       <button onClick={checkuser} className="bg-[#8272DA] w-24 p-1 rounded-md">
        Login
       </button>

       <p>Don't have an account? <Link to={"/signup"} className="underline">Sign up</Link> </p>
      </div>
    </div>
</div>)
}

export default Login