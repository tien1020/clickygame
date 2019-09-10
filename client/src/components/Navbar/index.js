import React from "react";
import "./style.css";

function Navbar(props) {
  return ( 
<div>
  <nav class="navbar">
<ul>
  <li class="brand">
    <a href = "/">Clicky Game</a>
    
  </li>
  <li class = "text">{props.children.statement}</li>
  <li>Score: {props.children.score}|Top Score: {props.children.topScore}</li>
</ul>
  </nav>
</div>
  );
};


export default Navbar;
