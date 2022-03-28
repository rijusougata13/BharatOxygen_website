import styled from 'styled-components';
import { StyledButton } from '../../../components/button/styles';
import { IoMdCall } from "react-icons/io";

export const Wrapper=styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    margin-top:-8rem;
    @media(max-width:600px){
      height: 90vh;
    }
    @media(max-width:350px){
      height: 100vh;
   }
`;

export const ButtonWrapper=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:row;
    /* height:60vh; */
    width:100%;

    @media(max-width:800px){
        height:10vh;
    }
`;

export const WrapButt=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const TextWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    /* margin-top:0; */
    margin-top:10rem;
    padding-top: 1rem;
    height:50vh;
    width:90%;

    @media(max-width:800px){
        height:60vh;
    }
`;

export const Button=styled(StyledButton)`
    color:white;
`;

export const Input=styled.input`
  height: 2rem;
  width: 14rem;   
  border: none;
  /* padding: 1px; */
  /* background:red; */
  /* z-index:15 !important; */
  font-size: 1rem;
`;

export const CallIcon=styled(IoMdCall)`
  position: relative;
  top: 3px;
  right: 4px;
  font-size: 16px;
  background:#5c9a79;
`;

export const InputWrapper=styled.div`
    background-color:#2F326B;
    width: 108.3%;
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 1rem;
    margin-top:-5rem;
    height:2rem;
    /* margin-top: -16rem; */

    
`;

export const Card=styled.div`
  display: flex;
  /* padding: 1rem; */
  padding:1rem 3.5rem;
  
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-webkit-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-moz-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
border-radius: 5px;
Button{

}
`;

export const Icon=styled.img`
  height: 6rem;
  border-radius: 50%;
`;

export const TextWrap=styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 0 1rem;
    justify-content: space-between;
    h5{
        margin: 1rem;
    }
`;

export const Wrap=styled.div`
 display: flex;
 justify-content: space-evenly;
 flex-wrap: wrap;

`;