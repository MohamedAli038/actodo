import Header from "../components/header"
import Cardd from "../components/Cardd"
import TodoContainer from "../components/TodoContainer"
import {useLocation} from "react-router-dom"

function Landing()
{
const data= useLocation()

    return( <div className="bg-black p-16">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
      {/*HEADER*/}
      <Header username={data.state.user} />

       {/*CARD*/}
      <div className="flex justify-between gap-7 my-5 flex-wrap ">


        <Cardd bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
        <Cardd bgcolor={"#FD6663"} title={"December"} subtitle={"15:09:80"} />
        <Cardd bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
      </div>

      {/*TODO CONTAINER*/}
      <TodoContainer/>
     
    </div>
  </div>)
}

export default Landing