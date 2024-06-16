import React,{useRef, useState} from "react"


function DynamicForm (){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);


    const handleTab = (e,ref) =>{
        if(e.key === "Tab"){
            e.preventDefault();
            ref.current.focus()
        }
    }


    return(
        <div>
            <input  ref={inputRef1}  onKeyDown={(e)=>handleTab(e,inputRef2)} type="text" placeholder="filed1" />
            <input  ref ={inputRef2}  onKeyDown={(e)=>handleTab(e,inputRef3)} type="text " placeholder="field2 " />
            <input  ref = {inputRef3}  onKeyDown={(e)=>handleTab(e,inputRef1)} type="text " placeholder="field3" />

        </div>
        
    )
}


export default DynamicForm