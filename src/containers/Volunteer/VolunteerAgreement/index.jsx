import React from 'react';
import {AgreementText, BodyWrapper, Button, ButtonWrapper, HeadingWrapper,  Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";


const VolunteerAgreement=()=>{
   
    return(
        <Wrapper>
            <BodyWrapper>
                <HeadingWrapper>Please read Volunteer Tasks and Duties</HeadingWrapper>
        
                <AgreementText>
                    <ul>
                        <li>You accept that you are ready to help the people in need during this crisis time with correct information.</li>
                        <br/>
                        <li>You agree that people will reach out to you on your contact number for any help or inforation regarding Oxygen supplier in your city.</li>
                        <br/>
                        <li>You take this pledge to help the citizens of India with true intensions and without any motive of benefits</li>
                    </ul>
                </AgreementText>
                <ButtonWrapper>
                 <Link to={'/VolunteerSubmit1'}>   <Button style={{background: 'green'}}>Yes,I Agree</Button></Link>
                 <Link to={'/'}>    <Button style={{background: 'red'}}>No,I Decline</Button> </Link>
                </ButtonWrapper>
            </BodyWrapper>
        </Wrapper>

    );
}
export default VolunteerAgreement;