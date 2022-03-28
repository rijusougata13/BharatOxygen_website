import styled from "styled-components";
import { IoMdCall } from "react-icons/io";

export const Wrapper=styled.div`
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  align-items: center;
  
`;

export const BoxWrapper=styled.div`
   display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
`;

export const TextWrapper=styled.div`
   display: flex;
   flex-direction: column;
   padding:1rem 3.5rem;
   margin-bottom: 2rem;
   justify-content:center;
   align-items:center;
   flex-wrap:wrap;
   box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-webkit-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-moz-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
border-radius: 5px;
margin: 1rem;
`;

export const Icon=styled.img`
  height: 6rem;
  border-radius: 50%;
  

`;

export const CallIcon=styled(IoMdCall)`
  position: relative;
  top: 3px;
  right: 4px;
  font-size: 16px;
`;
