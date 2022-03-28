import React,{useState,useContext} from 'react';
import {Button, ButtonWrapper, Input, TextWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
import {VolunteerContext,VolunteerProvider} from '../../../../context/volunteer';

const VolunteerSubmit1=()=>{
    const [volunteerQuestions,setVolunteerQuestions]=useContext(VolunteerContext);
    const [name,setName]=useState('');
    const [dob,setDOB]=useState('');
    const [phone,setPhone]=useState('');
    const [occupation,setOccupation]=useState('');
  
    const send=()=>{
        setVolunteerQuestions(prevQ=>({...prevQ,"Name":name,"Phone":phone,"Occupation":occupation}));
      
    }
    return(
        <Wrapper>
            <TextWrapper>
             
                <h1>Enter Volunteer Details </h1>
               <Input placeholder="FullName" onChange={e=>setName(e.target.value)}/>
               <Input placeholder="Phone No" onChange={e=>setPhone(e.target.value)}/>   
               <p style={{color:"red",marginTop:"-1rem"}}>Please Provide 10 digit Mobile Number </p>
              
               <Input placeholder="Occupation"onChange={e=>setOccupation(e.target.value)} />     
              
               
               {
                    ((!isNaN(phone) && phone.length==10) && phone && name  && occupation)?<Link to={"./VolunteerSubmit2"}><Button onClick={send} >Next</Button> </Link> 
                    :<h3 style={{color:"red"}}>Please Complete All Details</h3>
                }

             </TextWrapper>
               
        </Wrapper>

    );
}
export default VolunteerSubmit1;