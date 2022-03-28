import styled from 'styled-components';
import { StyledButton } from '../../../components/button/styles';

export const Wrapper=styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#293949;
    flex-direction:column;
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

export const TextWrapper=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:-10rem;
    height:40vh;
    width:90%;

    @media(max-width:800px){
        height:60vh;
    }
`;

export const Button=styled(StyledButton)`

`;