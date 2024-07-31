
import React from "react";

class Signup extends React.Component {
    render() {
      return (
        <>

<div className="login-page">
            <div className="signup-container">
            <h1>Signup</h1>
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

            <button className="login-btn">Sign In</button>


            </div>

            </div>
        </div>


        </>
      )
    }
  }

  export default Signup