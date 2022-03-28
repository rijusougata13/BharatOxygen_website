import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #8568db;
    text-transform: uppercase;
    /* color:#8568db; */
    font-weight: bolder;
    padding:1rem 1.5rem;
    border: none;
    border-radius: 10px;
    outline:none;
    cursor: pointer;
    
    transition:all 1s ease;
    :hover{
        transform: scale(1.1); 
    }
`;