import React from "react";
import {Component} from "react"

class Stateobject extends Component{
  state={username:"raj", pwd:"143"}
  render(){
    return(
      <><h1>
        {this.state.pwd}
      </h1>
      <h2>
        {this.state.username}
      </h2>
      </>
    )
  }

}
export default Stateobject