import styled from 'styled-components';
import { StyledButton } from '../../../../components/button/styles';
import IndiaImg from '../../../../assets/Map.png';

export const Wrapper=styled.div`
    height:100vh;
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
    background-position:left;
    background-size: 25rem;
    @media (max-width:600px){
        h1{
            font-size: 1.4rem;
            margin: 0 2rem;
            text-align: center;
        }
    background-size: 20rem;
    background-image:none;
    

      
    }
    @media (max-width:350px){
        /* height:120vh; */
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
    // @media(max-width:600px){
    //     height:5vh;
    // }

`;

export const HeadingWrapper=styled.div`
    /* display:flex; */
    justify-content:center;
    align-items:center;
    /* height:10vh; */
    font-size:2.5rem;
    font-weight:800;
    /* margin-bottom:2rem; */
    @media(max-width:600px){
        font-size:1rem;
    }

`;

export const AgreementText=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:scroll;
    margin-bottom:2rem;

    @media(max-width:600px){
        height:40vh;
        
        li{
            font-size:.5rem;
        }
    }

    li{
        font-size:1rem;
        margin-top:.5rem;

    }
    @media(max-width:360px){
        height: 60vh;
        margin: 1rem 0;
    }

    
    
`;
export const BodyWrapper=styled.div`
    height:60vh;
    width:70vw;
    display:flex;
    align-items:center;
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
        /* margin-top:-2rem; */
    }
    @media (max-width: 600px){
        padding: 1rem;
        margin: 1rem 0;
        height: auto;
        .heading{
            margin-top:0;
            font-size: 1.2rem;
        }
        h2{
            font-size:1rem;
        }
    }
    @media (max-width:350px){
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
     h2{
         font-size: 1.2rem;
     }  
    /* margin-bottom: 0rem; */
    padding-top: 0.3rem;
    /* margin-left: 2rem; */

  }
`;

export const LangSelect=styled.select`
    margin:2rem;
`;
export const Button=styled(StyledButton)`
margin-left:5rem;

font-size:1.2rem;
color:white;
@media (max-width: 600px){
    font-size: .5rem;
    margin:0;
    width:5rem;
    height:auto;
    text-align: center;
}

`;