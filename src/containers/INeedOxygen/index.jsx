import React, { useState, useEffect } from 'react';
import {Button, ButtonWrapper,VerifiedImg,  CardWrapper, TextWrapper, Wrapper, WrapButt, CallIcon,InputWrapper,CardTesting} from './styles/index';
import { Link } from 'react-router-dom';

import Verified from '../../assets/tickgreen.png';




import {getAllSuppliers} from '../../services/firebase_services/firestore_services';




const INeedOxygen=()=>{



    var [haveOxygenObjects, setHaveOxygenObjects] = useState([])

    useEffect(() => getAllSuppliers().then((ele)=>setHaveOxygenObjects(ele)).catch(err=>console.log(err)), [])

    return(
        <Wrapper>
             
            
            <TextWrapper>
            <InputWrapper>
            <h1 style={{color:'white',marginRight:"2rem"}}>Oxygen Suppliers List</h1>
         
              
            </InputWrapper>
                 
                   <ButtonWrapper>
                 
                   <WrapButt>
                        <h3>Need help in your city?</h3>   
                   <Link to={"./cityVolunteers"}> <Button>Contact City Volunteer</Button></Link>
                   </WrapButt>
               
                   </ButtonWrapper>      
               </TextWrapper>
           




      <CardWrapper>
        {haveOxygenObjects.map((value, index) =>(
        <CardTesting>
            <div className="cardLeft">
              <h1>{value.ShopName}</h1>
              <h2>{value.City} - {value.PinCode}</h2>
              <h2>{value.Lane}</h2>
            </div>
            <div className="cardRight">
              <div style={{display:"flex",alignItems:"right",justifyContent:"flex-end"}}>
              <VerifiedImg src={Verified}></VerifiedImg>
              <p>Verified</p>
              </div>
              <h3>{value.TypeofSupply}</h3>
              <h5> {value.HomeDelivary}</h5>
            <div  className="Call">
            <a href={"tel: "+value.Contact+""}>  <Button style={{height:"2.5rem",backgroundColor:"#5c9a79",marginTop:"1rem",padding:".4rem"}}   onClick="location.href = tel:+01273123456"><CallIcon/>Call</Button></a>
            </div>
            </div>
        </CardTesting>
        ))}

  

      
      </CardWrapper>















        </Wrapper>

    );
}
export default INeedOxygen;