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
        score: this.state.score+1,
        clickStatement: "You guessed correctly!",
        friends: this.shuffle() 
      })

      if(this.state.score>= this.state.topscore){
        this.setState({ 
          topscore:   this.state.topscore +1
        })
      }
    }
    else {
      console.log("You loose")
      this.setState({ clickStatement: "You guessed incorrectly!",
      score: 0 
    });
    }
    console.log(clickValue)
  }

  shuffle() {
    let newFriends = [];
    this.state.friends.forEach(friend => newFriends.push(friend));
    newFriends.sort(() => Math.random() - 0.5);
    return newFriends;
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
