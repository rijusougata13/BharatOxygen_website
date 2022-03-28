import React,{useState,useContext} from 'react';
import {Button,  Input, TextWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
import {UserHaveContext} from '../../../context/userHaveOxygen';


const Submit2=()=>{
    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    const [areaName,setAreaName]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');

    const send=()=>{
        // if(window.confirm("Your Data Save Successfully !")){
        //     //    return <Redirect  to="/AddSupplier" />
        //         // alert("DAS")
        //         history.push('./delivary')
        //     }
        //     else {
        //         alert("Please Click Okay Button !")
        // }
        setHaveQuestions(prevQ=>({...prevQ,"AreaName":areaName,"City":city,"State":state}));
    }
    return(
        <Wrapper>
            <TextWrapper>
                <h1>Enter Oxygen Supplier Details </h1>
          
               {/* <Input  type="text" required placeholder="Area Name" onChange={e=>setAreaName(e.target.value)}/>    */}
               <Input type="text" required placeholder="City" onChange={e=>setCity(e.target.value)} />
               <Input type="text" required placeholder="State" onChange={e=>setState(e.target.value)}/>

            {
            ( city && state)?
            <Link to={"./delivary"}>   <Button onClick={send} >Next</Button></Link>:<h3 style={{color:"red"}}>Please Complete All Details</h3>
            }

             </TextWrapper>

         
        </Wrapper>

    );
}
export default Submit2;