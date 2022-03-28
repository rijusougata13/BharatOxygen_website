import React from 'react';
import {Button,  Input, TextWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
const VerifyOTP=()=>{
    
    return(
        <Wrapper>
            <TextWrapper>
                <h2 className="heading">An OTP is Sent to Your Mobile Number.
                    <br/>
                     Please Enter the OTP. </h2>
               <Input placeholder="OTP"/>   
             <Link to={"./submit1"}> <Button>Verify OTP</Button></Link>  
             </TextWrapper>
         
        </Wrapper>

    );
}
export default VerifyOTP;