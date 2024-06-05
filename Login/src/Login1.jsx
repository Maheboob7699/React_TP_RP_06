import React,{useState} from "react";


function Login(){
const [count, setcount]= useState(0);

return(

    <div style={{textAlign:"center", backgroundColor:"blue",width:"250px",height:"350px"}}>
      <h2> counting {count} </h2>
      <h1>Login</h1>

      <div style={{width:"100px",marginLeft:"40px"}}>
      <input type="text" placeholder="Enter Username here" /></div>
      <br/>
      <br/>
      <input type="password" placeholder="Enter Password here" />
      <br/>
      <br/>
      <button type="submit">login</button><br/><br/>
      <button onClick={()=> setcount(count + 1)}>Increnment</button><br/><br/>
      <button onClick={()=> setcount(count - 1)}>Decerement</button>

    </div>
)

}

export default Login;