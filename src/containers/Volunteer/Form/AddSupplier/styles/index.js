import styled from 'styled-components';
import { StyledButton } from '../../../../../components/button/styles/index';
import IndiaImg from '../../../../../assets/Map.png';


export const Wrapper=styled.div`
    height:110vh;
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    overflow: none;
    background-image:url(${IndiaImg}) ;
    background-repeat:no-repeat;
    background-position:left;
    background-size: 35rem;
    @media (max-width:600px){
      background-image: none;
      h1{
        margin-bottom: 4rem;
        font-size:1.8rem;
      }
    }
`;

export const ButtonWrapper=styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction:row;
    /* height:60vh; */
    width:100%;

    @media(max-width:800px){
        height:10vh;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin-top: -4rem;
  padding: 1rem;
  opacity:.8;
  height:40vh;
  width: 50%;
  color:black;
  /* flex-wrap: wrap; */
  border-radius: 2%;
  background: rgba(0, 0, 0, 0) linear-gradient(145deg, rgb(255, 255, 255), rgb(218, 218, 218)) repeat scroll 0% 0%;
box-shadow: rgb(211, 211, 211) 7px 7px 14px, rgb(211, 211, 211) 7px 7px 14px;
  @media (max-width: 600px) {
    height: 60vh;
    width: 70%;
      
  }
`;

export const Button=styled(StyledButton)`

font-size:1.2rem;
color:white;
margin:1rem;

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

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 1; /* Firefox */
    font-size: 1.2rem;
    padding-left:1.1rem;
  }
`;