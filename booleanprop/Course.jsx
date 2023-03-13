import React from 'react'

const Course = (props) => {
  if(props.courseDetails.courseAvailable===true)
  {
  return (
  <>
  <h1>{props.courseDetails.courseName}</h1>
  <h2>{props.courseDetails.courseDuration}</h2>
  <button style={{color:"green"}}>Available</button>
  </>
    
  )
}
else{ return (
<>
  <h1>{props.courseDetails.courseName}</h1>
  <h2>{props.courseDetails.courseDuration}</h2>
  <button style={{color:"red"}}>Not Available</button>
  </>
  )
 

}
}
export default Course