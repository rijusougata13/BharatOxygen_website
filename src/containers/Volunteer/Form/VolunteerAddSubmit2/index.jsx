import React,{useState,useContext} from 'react';
import {Button, Input, TextWrapper, Wrapper} from './styles/index';
import {  useHistory} from 'react-router-dom';
import {UserHaveContext,UserHaveProvider} from '../../../../context/userHaveOxygen';


const Submit2=()=>{
    const history=useHistory();
    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    const [areaName,setAreaName]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');

    const send=()=>{
      
        if(window.confirm("Data Saved Successfully !")){
       
            history.push('/AddSupplier')
        }
        else {
            alert("Please Click Okay Button !")
        }
        setHaveQuestions(prevQ=>({...prevQ,"AreaName":areaName,"City":city,"State":state}));
    }
    return(
        <Wrapper>
            <TextWrapper>
                <h1>Enter Your Details </h1>
          
              
               <Input type="text" required placeholder="City" onChange={e=>setCity(e.target.value)} />
              

            {
            (city )?
             <Button onClick={send} >Next</Button>
          
             :<h3 style={{color:"red"}}>Please Complete All Details</h3>
            }
             </TextWrapper>

         
        </Wrapper>

    );
}
export default Submit2;