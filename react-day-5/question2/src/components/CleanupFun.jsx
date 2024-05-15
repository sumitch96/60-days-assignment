
import { useEffect,useState } from "react"
function CleaupFun(){
    let [time,setTime]=useState(0)

    useEffect(function(){
     function TimerComponent(){
         const timer=setInterval(()=>{
             setTime(prev=>prev+1)
         },1000)
    
     return ()=>{
         clearInterval(timer)//cleanup function
     }
 }
   TimerComponent()
    },[])//no dependency, 
     return <>
        <h1>Timer Component</h1>
        <p>Timer:{time}</p>
     </>
}
export default CleaupFun