import styled from 'styled-components';
import React , {useState} from 'react';
import {StyledButton} from '../../../../components/button/styles/index';

export const Wrappers = styled.div`
    position:sticky;
    top:0;
    z-index:10 !important;
    width:100%;
    display: flex;
    flex-direction: row;
    background: #eeeeee;
    align-items:center;
    margin-top: 0;
    height: 3rem;
    justify-content:space-between;
    z-index:2;
    /* box-shadow:1px 1px 15px #aaaaaa; */
    margin-bottom:-1.6rem;
`;

 export  const RightSide = styled.div`
    display: flex;
    word-spacing: 5px;
    align-items: center;
    justify-content:space-between;
    /* margin-right:10rem; */
    box-sizing:border-box;
    @media (max-width: 768px) {
    
        margin-top:39.1rem;
        position:fixed;
        z-index:10;
        flex-direction: column;
        /* background:linear-gradient(rgba(34, 32, 42, 1), rgba(34, 32, 41, .2)); */
        background:#e8e8e8;
        
        height:130vh;
        justify-content:space-around;
        color:goldenrod;
        box-sizing:border-box;
        padding:10rem 2rem 10rem 4rem;
        max-width: ${({ isOpen }) => (isOpen ? "300px" : "0")}; 
        opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; 
        transform: translateX(${({ isOpen }) => (isOpen ? "0rem" : "-10rem")}); 
        }
    
    li{
        /* padding:1rem; */
        text-decoration:none;
        list-style:none;
        cursor:pointer;
        color:black;
        margin:0 1rem 0 1rem;
        width:10rem;
        font-size: 1rem;
        @media (max-width:600px){
            color:black;


        }
    }

    
`;

export  const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #2F326B;
    margin-bottom: 4px;
    border-radius: 5px;
    color: #fff;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-right: 1rem;
  }
`;

export const LeftSide = styled.img`
    height:9rem;
    width:auto;
    color:white;
    margin-top: 0rem;
    margin-left:.5rem;
    /* padding-top:4rem; */
    /* margin-bottom:-2.4rem; */
    
    @media(max-width:800px){
        margin-bottom:-1.2rem;
    }
`;

export const Nav = styled.a`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #E0E0E0;
    font-weight: 500;
    text-decoration: none;
    padding:1rem 1rem;
    transition: .3s ease-in;
    
    &:hover{
        color: goldenrod;
    }

    @media (max-width: 850px) {
        font-size: 1.5rem;
  }
    @media (max-width: 750px) {
        font-size: 1.5rem;
    }
`;


export const Button =styled(StyledButton)`
    margin-right:1rem;
    height:2rem;
    padding-top:.5rem;
    box-sizing:border-box;
`;