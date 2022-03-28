import React, { useState, useEffect } from 'react'
import { Wrapper,BoxWrapper,TextWrapper,Icon,CallIcon } from "./styles";
import UserPic from '../../assets/volunteer.png';
import { StyledButton } from '../../components/button/styles';
import {getAllVolunteer} from '../../services/firebase_services/firestore_services';





const CityVolunteers = () => {

    const [volunteerObjects, setVolunteerObjects] = useState([])


    useEffect(() => getAllVolunteer().then((ele)=>setVolunteerObjects(ele)).catch(err=>console.log(err)), [])

    return (
       <Wrapper>
           <h1>City Volunteers </h1>
           <BoxWrapper>
            {volunteerObjects.map((value, index) => (
                <TextWrapper key={`${index}`}>
                <Icon src={UserPic}/>
                <p> {value.Name}</p>
                <p style={{color:"FD7818"}}>{value.TypeofSupply}</p>
                <h3>{value.City}</h3>
                <a href={"tel: "+value.Phone+""}> <StyledButton style={{backgroundColor:'lightGreen' ,width:"10rem"}}><CallIcon />Call</StyledButton></a>
               </TextWrapper>
            ))}

               
           </BoxWrapper>
       </Wrapper> 
    )
}

export default CityVolunteers;
