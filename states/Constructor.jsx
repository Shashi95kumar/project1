import React from "react"
import{Component}from "react"

class Constructor extends Component{
constructor(){
  super()
  this.state={username:"jon"}
}
render(){
  return(<h1>
    {this.state.username}
  </h1>)
}
}
export default Constructor
