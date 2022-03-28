import React, { useState } from 'react';
import {Wrappers,LeftSide,RightSide,Hamburger}from './styles/index';
import Logo from '../../../assets/logo2x.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
           <Wrappers>
               <Link to={'/'}> <LeftSide src={(Logo)}>
                </LeftSide>
                </Link>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span />
                    <span />
                    <span />
                </Hamburger>
                <RightSide isOpen={isOpen}>
                <Link style={{textDecoration:"none"}} to={"./need"} className="link">  
                 <li style={{textDecoration:"none"}}>Search Oxygen</li>
                 </Link>
                 <Link style={{textDecoration:"none"}} to={"./cityVolunteers"} className="link">
                    <li style={{textDecoration:"none"}}>City Volunteers</li>
                </Link>
                <Link style={{textDecoration:"none"}} to={"./volunteer"}className="link" >

                    <li style={{textDecoration:"none"}}>How to use Oxygen Cylinder?</li>
                </Link>
                <Link style={{textDecoration:"none"}} to={"./have"} className="link">
                    <li style={{textDecoration:"none"}}>Oxygen Supplier</li>
                </Link>
                </RightSide>
           </Wrappers>
        </>
    )
}





export default Navbar;