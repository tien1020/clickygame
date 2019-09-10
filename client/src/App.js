import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Navbar";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    score = 0,
    topscore = 0
  };

  render() {
    return (
     <ClickFunction />
    );
  }
}

export default App;
