import React from "react";
import '../component/home.css'

class Login extends React.Component {
    render() {
      return(
       <>
        <div className="login-page">
            <div className="login-container">
            <h1>login</h1>
            <div className="user">
                <label htmlFor="">
                    Username:
                    <input type="text" placeholder="Enter Your Name"id="user-inpt"/>
                </label>

                <div className="passd">
                <label htmlFor="">
                    password:
                    <input type="text" placeholder="Enter Your Name" id="pass-inpt" />
                </label>
            </div> 

            <button className="login-btn">Login</button>


            </div>

            </div>
        </div>
       </>
      )
    }
  }

  export default Login