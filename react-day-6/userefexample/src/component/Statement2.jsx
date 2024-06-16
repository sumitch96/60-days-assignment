import { useRef } from "react"

function Statement2(){
    let inputRef=useRef(null)
    let displayRef=useRef(null)

 function handleInput(){
        if(inputRef.current && displayRef.current){
            displayRef.current.innerText=inputRef.current.value
        }
 }

    return <>
       <div>
        <input type="text" placeholder="enter username" ref={inputRef} onChange={handleInput}/>
        <h2 ref={displayRef}></h2>
       </div>
    </>
}
export default Statement2