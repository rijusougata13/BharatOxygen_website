import React from "react";
import {
  BodyWrapper,
  
  Wrapper,
  Img,
} from "./styles/index";
import Steps from "../../../assets/Steps.png";
import Video from "../../../assets/video.mp4";
import Poster from "../../../assets/poster.png";

const InstructionPage = () => {
  return (
    <Wrapper>
     
      <BodyWrapper>
        <Img src={Steps} />
        {/* <video src={video} autoPlay="true"/> */}
        <video poster={Poster} controls src={Video}>
          <track default kind="captions" srcLang="en" src={Video} />
        </video>
        <a href="https://www.youtube.com/watch?v=_4yMccy_DaI">
          @COURTSEY-ALCAN CYLINDER
        </a>
      </BodyWrapper>
    </Wrapper>
  );
};
export default InstructionPage;
