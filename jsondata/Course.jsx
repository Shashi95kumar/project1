import React from "react"
const Course =(props)=>{
  console.log(props);
  return(
    <div className="parentBlock">
    <div className="mainBlock">
      <img src={props.payload[0].photo} alt="" />
      <h1>{props.payload[0].studentName}</h1>
      <h2>{props.payload[0].courseName}</h2>
      <h3>{props.payload[0].duration}</h3>
    </div>
     <div className="mainBlock">
     <img src={props.payload[1].photo} alt="" />
     <h1>{props.payload[1].studentName}</h1>
     <h2>{props.payload[1].courseName}</h2>
     <h3>{props.payload[1].duration}</h3>
   </div>
    <div className="mainBlock">
    <img src={props.payload[2].photo} alt="" />
    <h1>{props.payload[2].studentName}</h1>
    <h2>{props.payload[2].courseName}</h2>
    <h3>{props.payload[2].duration}</h3>
  </div>
   <div className="mainBlock">
   <img src={props.payload[3].photo} alt="" />
   <h1>{props.payload[3].studentName}</h1>
   <h2>{props.payload[3].courseName}</h2>
   <h3>{props.payload[3].duration}</h3>
 </div>
  <div className="mainBlock">
  <img src={props.payload[4].photo} alt="" />
  <h1>{props.payload[4].studentName}</h1>
  <h2>{props.payload[4].courseName}</h2>
  <h3>{props.payload[4].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[5].photo} alt="" />
 <h1>{props.payload[5].studentName}</h1>
 <h2>{props.payload[5].courseName}</h2>
 <h3>{props.payload[5].duration}</h3>
</div>

<div className="mainBlock">
<img src={props.payload[6].photo} alt="" />
<h1>{props.payload[6].studentName}</h1>
<h2>{props.payload[6].courseName}</h2>
<h3>{props.payload[6].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[7].photo} alt="" />
 <h1>{props.payload[7].studentName}</h1>
 <h2>{props.payload[7].courseName}</h2>
 <h3>{props.payload[7].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[8].photo} alt="" />
 <h1>{props.payload[8].studentName}</h1>
 <h2>{props.payload[8].courseName}</h2>
 <h3>{props.payload[8].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[9].photo} alt="" />
 <h1>{props.payload[9].studentName}</h1>
 <h2>{props.payload[9].courseName}</h2>
 <h3>{props.payload[9].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[10].photo} alt="" />
 <h1>{props.payload[10].studentName}</h1>
 <h2>{props.payload[10].courseName}</h2>
 <h3>{props.payload[10].duration}</h3>
</div>
 <div className="mainBlock">
 <img src={props.payload[11].photo} alt="" />
 <h1>{props.payload[11].studentName}</h1>
 <h2>{props.payload[11].courseName}</h2>
 <h3>{props.payload[11].duration}</h3>
</div>
    </div>
  )
}
export default Course