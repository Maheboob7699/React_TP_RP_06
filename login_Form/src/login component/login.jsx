import React from "react";
import '../login component/login.css'

class Login extends React.Component {
    render() {
      return(
      <>
      <div className="login-Form">

        <div >
       <label htmlFor="" id="input-1">
        Login <input type="text" placeholder="Enter Name" />
       </label>
       <br />
       </div>


      <div>
      <label htmlFor="" id="input-2">
        Password <input type="password"  placeholder="Enter Name" />
       </label>
       <br />
      </div>
      

       <button>Submit</button>
      </div>


      </>
      )
    }
  }

  export default Login;