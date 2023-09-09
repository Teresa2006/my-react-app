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
        src={'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cb402ebfc70f6cb272804ae0d485b55d~c5_720x720.jpeg?x-expires=1694383200&x-signature=LLahhHoz5mjisoUAV7FLTvifxsY%3D'}
        className="imageclass"
      /> 

    </div>
  )
}