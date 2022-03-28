import styled from 'styled-components';
import { StyledButton } from '../../../components/button/styles';
import IndiaImg from '../../../assets/Map.png';

export const Wrapper=styled.div`
    /* height:130vh; */
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    position:relative;
    font-family: 'Roboto', sans-serif;
    .volunteer{
        width:80vw;
        justify-content:space-around;
    }
    background-image:url(${IndiaImg}) ;
    background-repeat:no-repeat;
    background-position: 1rem 6rem;
    background-size: 30rem;
    @media (max-width:600px){
        h1{
            font-size: 1.4rem;
            margin: 0 2rem;
            text-align: center;
        }
    background-size: 20rem;
    height: 85vh;
    background-image: none;
      
    }
    @media (max-width: 350px){
       height: 110vh;
    }
`;
export const HeadingWrapper=styled.div`
    display:flex;
    /* justify-content:center; */
    align-items:center;
    /* flex-direction:row; */
    /* height:40vh; */
    /* width:100%; */
    background:#94A0B1;
    box-sizing:border-box;
    padding:4rem;
    @media (max-width: 600px){
       /* flex-direction: column; */
    padding:  1rem;
        
     }
     

`;

export const VolunteerWrapper=styled.div`
    display:flex;
    justify-content:center;
    /* text-align:left; */
    align-items:center;

    flex-direction:column;
    width:100%;
    background-color:#94A0B1;
    /* height:40vh; */
    z-index:3;
    @media(max-width:600px){
        /* margin-right:1rem; */
       margin-left:2rem;
    }
    /* margin-left:12rem; */
    .h1{
        /* margin-left:1rem; */
        font-size:2.5rem;
    }
    @media (max-width: 600px){
    flex-direction: column;
    margin-right:2rem;
    text-align: center;
    /* height:70vh; */
    /* width: 100%; */
      .h1{
          font-size: 1rem;
          padding: 1rem;
      }

    }
    .h1{
        color:#2f326b;
    }
    .button{
        padding: 1rem;
        margin-bottom: 1rem;
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

export const BodyWrapper=styled.div`
    height:50vh;
    width:50vw;
    display:flex;
    align-items:left;
    justify-content:space-evenly;
    flex-direction:column;
    /* border:4px solid black; */
    padding:3rem;
    margin: 1rem 3rem;
    background-color:#f2f2f2;
    box-shadow:10px 2px 15px #aaaaaa;
    opacity:.9;

    .heading{
        justify-content:center;
        align-items:center;
        display:flex;
        /* margin-top:2rem; */
    }
    @media (max-width: 600px){
        padding: 1rem;
        margin: 1rem 0;
        height: auto;
        width:80vw;
        .heading{
            margin-top:0;
            font-size: 1.2rem;
        }
        h2{
            font-size:1rem;
        }
    }
`;


export const Hr=styled.hr`
    color:black;
    width:100%;
    height:.6px;
    background-color:#dddddd;

`;
export const TextWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    text-align:left;
    align-items:center;
    flex-direction:row;
    @media (max-width: 600px){
        flex-direction: column;
        height:20vh;
    }
    @media (max-width:350px){
        margin-bottom: 1rem;
    }
    .h2{
        margin-top:2rem;
        color:#505050;
    }
`;

export const LangWrapper=styled.div`
    display:flex;
    /* position:sticky; */
    /* top:0; */
    justify-content:center;
    align-items:center;
    flex-direction:row;
    /* position:absolute; */
    /* right:40%;
    top:3rem; */
    top:0rem;
    width:100%;
    padding-top:1.3rem;
    height:4rem;
    background-color:#2F326B;
    /* margin-bottom:21rem; */
    /* border:2px solid black; */
    margin-bottom:2rem;
    color:white;
   @media (max-width: 600px){
     h1{
         font-size: 1.2rem;
     } 
     /* width:20rem; */
     /* padding-left:2rem; */
     margin-top:2rem; 
    padding-top: 0.3rem;

  }

  @media(max-width:400px){
      margin-top:5rem;
      h2{
         font-size: 1rem;
     } 
  }
`;

export const LangSelect=styled.select`
    margin:2rem;
    width:8rem;
    font-size:1.4rem;
`;
export const Button=styled(StyledButton)`
/* margin-left:5rem; */
font-size:1.2rem;
color:white;
@media (max-width: 600px){
    font-size: .8rem;
    margin:0;
}
@media (max-width: 400px){
    font-size: .6rem;
    margin:0;
}

`;