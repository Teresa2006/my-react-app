import React from "react";
import './Home.css'

export default function Home() {

  return(
    <div
      className="container-home"
    >

      <a href="/flex"> Go to Flex </a>
      <a href="/styled"> Go to Styled </a>
            <a href="/styled"> Go to Styled </a>


      <p className="Home">Home</p>
      
      <div className="box" > Box </div>
      <div className="box2" > Box </div>
      <img
        src={'https://ih1.redbubble.net/image.2537398049.1291/mp,840x830,matte,f8f8f8,t-pad,1000x1000,f8f8f8.jpg'}
        className="imageclass"
      /> 

    </div>
  )
}