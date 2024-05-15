import { useEffect,useState } from "react"
import axios from "axios"
function Question1(){
    let [users,setUsers]=useState([])

    useEffect(function(){//useEffect hook
        async function getData(){
            try {
                let resp=await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(resp.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])//data will render when the component mount on the UI
return <>
 <h1>Fetch data..</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {
            users.map((ele)=>(
                <div key={ele.id} style={{border:"2px solid blue",borderRadius:"10px",margin:"10px",padding:"10px"}}>
                    <p><strong>Name:</strong> {ele.name}</p>
                    <p><strong>Username:</strong> {ele.username}</p>
                    <p><strong>Mobile:</strong> {ele.phone}</p>
                    <p><strong>Company:</strong> {ele.company.bs}</p>
                </div>
            ))
        }
    </div>
</>
}
export default Question1 