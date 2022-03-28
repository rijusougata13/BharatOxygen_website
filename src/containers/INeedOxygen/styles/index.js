import styled from 'styled-components';
import { StyledButton } from '../../../components/button/styles';
import { IoMdCall } from "react-icons/io";


export const Wrapper=styled.div`
    /* height:290vh; */
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    /* margin-top:-8rem; */
    @media(max-width:600px){
      /* height: 260vh; */
      /* margin-top:2rem; */
    }
    @media(max-width:350px){
      /* height: 320vh; */
   }
`;

export const ButtonWrapper=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-direction:row;
    /* height:60vh; */
    width:100%;
    margin-bottom: 1rem;
    @media(max-width:800px){
        /* margin-top: 10rem; */
        /* height:20vh; */
        flex-direction: column;
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
    margin-top:0rem;
    padding-top: 1rem;
    /* height:50vh; */
    width:100%;
    margin-top: 6rem;

    h1{
        font-size: 1rem;
        text-align: left;
    }
    @media(max-width:600px){
        /* height:80vh; */
        margin-top: 6rem;
    width: 85%;

    }
    @media(max-width:350px){
    height: 90vh;
    width: 80%;
    }
`;

export const Hr=styled.hr`
    display: none;
    @media (max-width: 600px){ 
     display: block; 
    color:black;
    width:100%;
    height:.6px;
    background-color:#dddddd;
    }

`;

export const Button=styled(StyledButton)`
    color:white;
    width: auto;
    
`;

export const Input=styled.input`
  height: 2rem;
  width: 14rem;   
  border: none;
  /* padding: 1px; */
  /* background:red; */
  /* z-index:15 !important; */
  font-size: 1rem;
  @media(max-width:600px){
     width: 6rem;
  }
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 1rem 0 1rem 0;
    margin-top:-5rem;
    height:2rem;
    /* margin-top: -16rem; */

    
`;

export const TableWrapper=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  max-width:500px;
  display:block;
  overflow:auto;
`;
export const Card=styled.div`
  display: flex;
  width:20vw;
  height:30vh;
  flex-direction:column;
  padding:1rem 3.5rem;  
  margin: 1rem;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-webkit-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
-moz-box-shadow: 4px 7px 69px 7px rgba(0,0,0,0.24);
border-radius: 5px;
  @media(max-width:600px){
    height:40vh;
    width:50vw;
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


export const CardWrapper=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:auto;
  width:auto;
  flex-wrap:wrap;
`;

export const CardTesting=styled.div`
  display: flex;
  width:70vw;
  height:40vh;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  margin:2rem;
  box-shadow:10px 18px 15px #aaaaaa;
  @media(max-width:600px){
    margin:5rem 0;
    flex-direction:column;

  }
  .Call{
    display:flex;
    justify-content:flex-end;
    margin-bottom:1rem;
    @media(max-width:600px){
      justify-content:center;
      /* margin-bottom:1rem; */
      padding:0;
      margin:0;
      /* margin-top:0 !important; */
      height:8vh;
    }
  }
  .cardLeft{
     height:40vh;
    display:flex;
    align-items:left;
    padding-left:2rem;
    justify-content:center;
    flex-direction:column;
    background:#201851;
    flex:2;
    text-align:left;
    h1{
      color:white;
      font-size:2rem;
    }
    h2{
      color:white;
      font-size:1.2rem;
    }
    h3{
      color:white;
      font-size:1rem;
    }

    @media(max-width:600px){
      /* margin:2rem; */
      width:80vw;
      align-items:center;
      padding-left:0;
      h1{
        font-size:1.2rem;
      }
      h2{
        font-size:.8rem;
      }
     
    }
  }
  .cardRight{
     height:40vh;
     
    display:flex;
    align-items:right;
    justify-content:center;
    flex-direction:column;
    flex:1;
    background-color:#F1C77A;
    padding-right:2rem;
    /* position:relative; */
    h3{
      text-align:right;
      color:black;
    }
    p{
      text-align:right;
      color:black;
      font-weight:500;
    }
     h5{
        text-align:right;
        color:#3A558A;
        font-size:.9rem;
        font-weight:700;
      }
    @media(max-width:600px){
      width:80vw;
      height:40vh;
      align-items:center;
      justify-content:space-between;
      padding-right:0;
      /* margin:1rem; */
      box-sizing:border-box;
      padding-bottom:10px;
      padding-top:1rem;
      h3{
        font-size:1rem;
      }
    }
  }
`;

export const VerifiedImg=styled.img`
  height:2rem;
  width:3rem;
  /* position:absolute;
  left:16rem;
  top:1rem; */

`;