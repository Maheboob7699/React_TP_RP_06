import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
    render() {
      return (
        <>
        <div className="navbar">
        <ul>
           <li><NavLink to="/">Login</NavLink></li>
           <li><NavLink to="/signup">Sign In</NavLink></li>
        </ul>

        </div>


        </>
      )
    }
  }

  export default Home