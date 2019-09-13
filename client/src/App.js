import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


let clickValue = [];

class App extends Component {
  state = {
    friends,
    score: 0,
    topscore: 0,
    clickStatement: "Click an image to begin!"
  };


  clickShuffle= (id) => {
    console.log("click", id)
    let hasValue = clickValue.indexOf(id)
    if (hasValue === -1) {
      clickValue.push(id)
      this.setState({
        score: clickValue.length
      })
    }
    else {
      console.log("You loose")
    }
    console.log(clickValue)
  }


  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score}
                topscore={this.state.topscore}
                clickStatement={this.state.clickStatement}
        ></Navbar>
        <Header></Header>
        {this.state.friends.map(friend => (
          <FriendCard

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clickShuffle = {this.clickShuffle}

          />
        ))}
        <Footer></Footer>

      </Wrapper>
    );
  }
}

export default App;
