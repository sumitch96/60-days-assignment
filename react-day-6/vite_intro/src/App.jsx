import { useState } from 'react'


function App() {
  let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
  let [allData,setAlldata]=useState([])

  function handleSubmit(e){
    e.preventDefault()
    setAlldata(prev=>[...prev,{
      username,
      password
    }])
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <input type="text" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <input type="submit" value="SUBMIT" />
        </form>

        <div>
          {
            allData?.map((ele,index)=>(
              <div key={index}>
                    <h2>Username: {ele.username}</h2>
                    <p>Password: {ele.password}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
