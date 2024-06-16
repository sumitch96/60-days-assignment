import { useRef } from "react"


function Statement3(){
    let colorRef=useRef(null)


    function newColor(){
        let latters='0123456789ABCDEF'
        let color="#"
        for(let i=0;i<6;i++){
            color=color+latters[Math.floor(Math.random()*16)]
        }
        return color
    }

    function handleClick(){
        if(colorRef.current){
            colorRef.current.style.backgroundColor=newColor()
        }
    }
    return <>
      <div>
            <div style={{width:"10%",height:"10vh",border:"2px solid"}} ref={colorRef}>

            </div>
                <button onClick={handleClick}>Change Color</button>
      </div>
    </>
}
export default Statement3