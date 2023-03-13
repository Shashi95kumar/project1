import React from "react"
import {Component} from "react"

class Arraystates extends Component{
  state={subject:"react.js",
skills:["html","css","js"]}
render(){
  return(<>
  <h1>{this.state.subject}</h1>
  <h2>{this.state.skills.map((x)=>{
    return (<li>
      {x}
    </li>)
  })}</h2></>)

}
}
export default Arraystates