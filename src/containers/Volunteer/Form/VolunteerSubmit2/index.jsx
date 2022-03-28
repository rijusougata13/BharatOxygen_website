import React,{useState,useContext} from 'react';
import {Button, ButtonWrapper, Input, TextWrapper, Wrapper} from './styles/index';
import { Link,useHistory } from 'react-router-dom';
import {VolunteerContext,VolunteerProvider} from '../../../../context/volunteer';
import firebase from '../../../../services/firebase_services/firebase_config';
import {addvolunteer} from '../../../../services/firebase_services/firestore_services';

const VolunteerSubmit2=()=>{
    const history=useHistory();
    const [volunteerQuestions,setVolunteerQuestions]=useContext(VolunteerContext);
    const [pincode,setPincode]=useState('');
    const [city,setCity]=useState('');
    // const [address,setAddress]=useState('');

    const AddUser = obj => {
        addvolunteer(obj).then(()=>console.log("Ok")).catch((err)=>console.log(err));
    }


    const send=()=>{
        // setVolunteerQuestions(prevQ=>({...prevQ,"City": city,"Pincode":pincode}));

         AddUser(volunteerQuestions)
        if(window.confirm("Data Saved Successfully !")){
            //    return <Redirect  to="/AddSupplier" />
                // alert("DAS")
                // AddUser(volunteerQuestions);
                history.push('/AddSupplier')
                // console.log(volunteerQuestions)
            }
        else {
                alert("Please Click Okay Button !")
        }
     }

    return(
        <Wrapper>
            <TextWrapper>
                <h1>Enter Your Details </h1>
                <Input placeholder="City" onChange={e => setVolunteerQuestions(prevQ=>({...prevQ,"City": e.target.value}))} />
               <Input placeholder="Pincode" onChange={e => setVolunteerQuestions(prevQ=>({...prevQ,"Pincode":e.target.value}))} />   
               
               {/* <Input placeholder="Address" onChange={e=>setAddress(e.target.value)}/> */}
            {/* <Link to={"./volunteerSubmit"}> */}
                {/* <Button onClick={send} >Submit</Button> */}
                {/* </Link>   */}
                
                   <Button onClick={send}>Submit</Button>
                   {/* <h3 style={{color:"red"}}>Please Complete All Details</h3> */}
                
             </TextWrapper>

            {/* <button onClick={show}>Show</button> */}
            {/* <button onClick={e=>console.log(volunteerQuestions)}>show</button> */}
        </Wrapper>

    );
}
export default VolunteerSubmit2;