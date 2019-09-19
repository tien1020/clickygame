import React from "react";
import "./style.css";

function Navbar(props) {
  return ( 
<div>
  <nav className="navbar">
<ul>
  <li className="brand">
    <a href = "/">Clicky Game</a>
    
  </li>
  <li className = "text">{props.clickStatement} -------- Score: {props.score}|Top Score: {props.topscore}</li>
</ul>
  </nav>
</div>
  );
};


export default Navbar;
