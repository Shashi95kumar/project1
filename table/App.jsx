import React from "react"
import JSON from "./users.json"
import Users from "./Users.jsx"
import { Component } from "react"

class App extends Component {
  constructor(){
    super()
    this.state={json:JSON}
  }
  render(){
    return(<div>
      <Users data={this.state.json}/>
      </div>)
  }
} 
export default App