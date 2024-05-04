import React from "react"
import example from "../Assets/mental-health.jpeg"

const Example = () => {
  return (
    <div>
      <img src={example} alt="" />
      <p>
        Description: This is how you can get free mental health free theraphy
        session
      </p>
      <p> Where: www.mental-health.com</p>
      <p>Cost: Free</p>
    </div>
  )
}

export default Example
