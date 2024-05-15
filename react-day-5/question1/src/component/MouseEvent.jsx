
import { useState,useEffect } from "react";
function MouseEvent(){
    let [mousePosition,setMousePosition]=useState({
        x:0,
        y:0
    })

    useEffect(function(){
        function mouseSituation(e){
            setMousePosition({//state to store the positon of mouse
                x:e.clientX,
                y:e.clientY
            })
            console.log(mousePosition);
        }
        document.addEventListener("mousemove",mouseSituation)

        document.title="new title"// re-render UI when the title to website will change
        
        //cleanup function
        return ()=>{
            document.removeEventListener("mousemove",mouseSituation)
        }

    },[])//empty array dependency, when the component will mount into the UI
   return <>
     <h1>Mouse Position Tracker</h1>
     <p>X postion: {mousePosition.x}</p>
     <p>Y postion: {mousePosition.y}</p>
   </> 
}
export default MouseEvent