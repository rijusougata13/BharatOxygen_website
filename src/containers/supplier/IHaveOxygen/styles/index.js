import styled from "styled-components";
import { StyledButton } from "../../../../components/button/styles";
import IndiaImg from '../../../../assets/Map.png';


export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  flex-direction: column;
  background-image:url(${IndiaImg}) ;
    background-repeat:no-repeat;
    background-position:left;
    background-size: 25rem;
    @media(max-width:600px){
      background-image: none;
      /* height:40vh; */
    }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  /* height:60vh; */
  width: 100%;

  @media (max-width: 800px) {
    height: 10vh;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -10rem;
  height: 45vh;
  width: 55%;
  border-radius: 2%;
  opacity:.9;
  background: rgba(0, 0, 0, 0) linear-gradient(145deg, rgb(255, 255, 255), rgb(218, 218, 218)) repeat scroll 0% 0%;
box-shadow: rgb(211, 211, 211) 7px 7px 14px, rgb(211, 211, 211) 7px 7px 14px;
  @media (max-width: 600px) {
    height: 60vh;
    width: 90%;
    text-align: center;
    margin-top:0rem;
    h1{
      font-size:1.3rem;
    }
  }
`;

export const Button=styled(StyledButton)`
color:white;
font-size:1.2rem;
color:white;

`;

export const DisabledButton=styled(StyledButton)`
background-color:gray;
font-size:1.2rem;
color:white;

:hover{
  transform:none;
}
`;

export const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  margin: 1rem;
  border-radius: 9px;
  border: none;
  background-color: transparent;
  border: 1px solid #aaaaaa;
  /* color: white; */
  outline: none;
  margin-left: 0rem;
  @media(max-width:600px){
    margin-left: 1rem;
    width:auto;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: darkgray;
    opacity: 1; /* Firefox */
    font-size: 1.2rem;
    padding-left:1.1rem;
  }
`;

export const InputOTP = styled.input`
  width: 20rem;
  height: 2.5rem;
  margin: 1rem;
  border-radius: 9px;
  border: none;
  background-color: transparent;
  border: 1px solid #aaaaaa;
  /* color: white; */
  outline: none;
  margin-left: 0rem;
  @media(max-width:600px){
    margin-left: 1rem;
    width:auto;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: darkgray;
    opacity: 1; /* Firefox */
    font-size: 1.2rem;
    padding-left:1.1rem;
  }
`;
