import { useState } from "react"


function App() {
  const[count, setCount]=useState(0);
  function incNum(){
    setCount(count+1)
  }


  function decNum(){
    if(count>0){
      setCount(count-1)
    }
      else{
        alert("You reach the Zero value")
      }
    
  }

  return (
    <>


    <div style={{display:"flex",justifyContent:"center",marginTop:"100px",alignItems:"center"}}>
    <div style={{backgroundColor:"violet",height:"180px",width:"290px" ,borderRadius:"10px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19"}}>
    <h1 style={{marginLeft:"134px",marginTop:"25px",color:"white"}}> {count}</h1>
    <button style={{marginLeft:"20px",width:"100px",height:"25px",border:"none",borderRadius:"10px"}}
    onClick={incNum}>
      Increment</button>
    <button style={{marginLeft:"40px" ,width:"100px"  ,height:"25px",border:"none",borderRadius:"10px"}}
    onClick={decNum}>
      Decrement</button>
    </div>
    </div>



      
    </>
  )
}

export default App
