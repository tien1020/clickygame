import React from "react";
import "./style.css";

function Navbar(props) {
  return <h1 className="navbar">{props.children}</h1>;
<div>
  <nav class="navbar">
<ul>
  <li class="brand">
    <a href = "/">Clicky Game</a>
    
  </li>
  <li class = "text">{props.children}</li>
  <li>Score: {props.children}|Top Score: {props.children}</li>
</ul>
  </nav>
</div>

}


export default Navbar;
