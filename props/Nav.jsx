import React,{Component} from "react";
export default class Nav extends Component{render(){
  return(<>
  <h1>{this.props.girl}   </h1>
  <h1>{this.props.pwd}</h1>
  <h1>{this.props.id}</h1>
  <h1>{this.props.loc}</h1></>)
}}