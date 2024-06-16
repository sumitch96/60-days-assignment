import { useEffect, useRef } from "react"

function Statement1() {
   let inputRef=useRef(null)

   //[state,setSate]=useState(0)
   //{current:value}=useRef(null)

   function focuse(){
        inputRef.current.focus()
   }
   useEffect(function(){
        focuse()
   },[])
    return <>
       <div>
        <input type="text" placeholder="enter username" ref={inputRef}/>
       </div>
    </>
}
export default Statement1