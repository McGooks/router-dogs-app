import React, { Component } from 'react'
import Routes from "./Routes"
import Navbar from "./Navbar"
import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg"
import tubby from "./images/tubby.jpg"
import "./App.css"


// npm install --save bootstrap react-router-dom jquery popper.js
// refer to the index.js file & make sure you have imported the CSS directory from Bootstrap
// import </BrowserRouter> on index.js & wrap <App/>

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!", 
          "Whiskey eats ants"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
   
    return (
      <div>
        <Navbar dogs={this.props.dogs}/>
        <div className="Container">
        <Routes dogs={this.props.dogs}/>
        </div>
      </div>
    )
  }
}

export default App