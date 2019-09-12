import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import Footer from "./components/Footer";

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
