import React,{useState,useContext} from 'react';
import {Button, Input, TextWrapper, Wrapper,DisabledButton} from './styles/index';
import { Link } from 'react-router-dom';
import {UserHaveContext} from '../../../context/userHaveOxygen';


const IHaveOxygen=()=>{

    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    const [mobile,setMobile]=useState('');
    const [otp,setOtp]=useState(false);
    const submit=()=>{
        setHaveQuestions(prevQ=>({...prevQ,"Contact":mobile}));
        setOtp(true);
    }
    // {
    //     if(!isNaN(mobile) && mobile.length()==10){
    //      setOpen(true)
    //  }
    // }
    
    return(
        <Wrapper>
            
              
                <TextWrapper>
                <h1 style={{fontFamily: 'sans-serif'}}>Enter Oxygen Supplier Contact Number</h1>
                <p style={{color:"red"}}>Please Provide 10 digit Mobile Number </p>
               <Input placeholder="Mobile Number" onChange={e=>setMobile(e.target.value)} />   
               
                {
                    !(!isNaN(mobile) && mobile.length===10)? <DisabledButton >Next</DisabledButton>: <Link to={"/have/submit1"} ><Button onClick={submit}>Next</Button></Link> 
                }
              </TextWrapper>
             
            
        </Wrapper>

    );
}
export default IHaveOxygen;