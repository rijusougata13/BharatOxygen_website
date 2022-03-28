import styled from 'styled-components';
import { StyledButton } from '../../../../components/button/styles';

export const Wrapper=styled.div`
    height:160vh;
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    overflow: none;
`;

export const ButtonWrapper=styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-direction:row;
    /* height:60vh; */
    width:100%;

    @media(max-width:800px){
        height:10vh;
    }
    @media(max-width:600px){
      height:8vh;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0rem;
  padding: 1rem;
  width: 60%;
  height:auto;
  border-radius: 2%;
  background: rgba(0, 0, 0, 0) linear-gradient(145deg, rgb(255, 255, 255), rgb(218, 218, 218)) repeat scroll 0% 0%;
  box-shadow: rgb(211, 211, 211) 7px 7px 14px, rgb(211, 211, 211) 7px 7px 14px;
  // @media(max-width:1100px){
  //   font-size:1.2rem;
  //   width:70%;
  @media(max-width:800px){
    font-size:0.8rem;
    width:80%;}
    @media(max-width:600px){
      font-size:0.4rem;
      width:90%;
    
  }
`;

export const QuestionWrapper=styled.div`
    display:flex;
    justify-content:center;
    /* text-align:left; */
    align-items:center;
    flex-direction:column;
    height:50vh;
    .Question{
      width:22rem;
      background-color:#f2f2f2;
      color:black;
      width:25rem;
      // @media(max-width:110px){
      //   width:20rem;
      // }
      @media(max-width:800px){
        width:13rem;
        
      }
      @media(max-width:600px){
        width:15rem;
        
      }

      

     
    }
`;

export const Button=styled(StyledButton)`
background-color:#8568db;
font-size:1.2rem;
color:white;
margin:2rem;
border:1px solid black;
// @media(max-width:1100px){
//   font-size:1.5rem;
//   margin-left:1.6rem;
// }
@media(max-width:800px){
  font-size:0.9rem;
  margin:1rem;
}
@media(max-width:600px){
  font-size:0.8rem;
  margin:1rem;
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

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 1; /* Firefox */
    font-size: 1.2rem;
    padding-left:1.1rem;
  }
`;