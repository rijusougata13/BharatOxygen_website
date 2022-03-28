import styled from 'styled-components';
import { StyledButton } from '../../../../components/button/styles/index';

export const Wrapper=styled.div`
    height:150vh;
    width:100%;
    margin-top: 4rem;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f2f2f2;
    flex-direction:column;
    position:relative;
    /* border:41px solid black; */
    @media (max-width: 600px){
        /* flex-direction: row; */
        height:110vh;
    }
`;
export const TextWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    text-align:left;
    align-items:center;
    flex-direction:row;
    width:100%;
    height:30vh;
    /* margin-left:12rem; */
    @media (max-width: 600px){
      flex-direction: column;
    text-align: center;
    height:40vh;


    }
    .h1{
        color:#2f326b;
    }
    
`;


export const BodyWrapper=styled.div`
    height:120vh;
    /* height:100vh; */
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:#f2f2f2;
    box-sizing:border-box;
    padding:4rem;
    z-index:0;
    a{
        /* text-decoration:none; */
        color:blue;
        margin-top:-4rem
    }
    @media(max-width:600px){
        height:130vh;
    }

    /* padding:4rem; */
    img{
        width:35rem;
        height:38rem;
        margin-top:2rem;
        @media (min-width: 320px) and (max-width: 480px) {
            width:15rem;
            height:15rem;

        }
    }
    video{
        margin-top:1rem;
        margin-bottom:5rem;
        width:50%;
        height:40%;

        @media(max-width:800px){
            width:25rem;
        }

        @media(max-width:600px){
            width:20rem;
        }
        @media (min-width: 320px) and (max-width: 480px) {
            width:15rem;
            height:15rem;

        }
    }

    
`;

export const HeadingWrapper=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    /* height:40vh; */
    width:100%;
    background:#94A0B1;
    box-sizing:border-box;
    padding:4rem;
    @media (max-width: 600px){
       flex-direction: column;
    padding: 0rem 1rem;
    /* height:70vh; */
     
       h1{
           font-size: 1.4rem;
       }
     }
     

`;


export const Button=styled(StyledButton)`
margin-left:5rem;
background-color:#2F326B;
color:white;
font-size:1.5rem;
@media (max-width: 600px){
    margin-left: 0;
    margin-bottom: 4rem;
    font-size: .8rem;

}
`;

export const Img=styled.img`
   height: 32rem;
   width: 48rem;
   @media (max-width:600px){
       height: 20rem;
       width: 20rem;

   }
`;