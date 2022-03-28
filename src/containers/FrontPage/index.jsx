import React from 'react';
import {BodyWrapper, Button, Hr,  LangWrapper, TextWrapper,VolunteerWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
import { HeadingWrapper } from '../supplier/UserAgreement/styles';


const FrontPage=()=>{
    
    return(
        <Wrapper>
         
            <LangWrapper>

            <h1>  India Fights Against COVID-19</h1>
            
            </LangWrapper>
            
            <BodyWrapper>
                <h1 className="heading">Please Select Your Option</h1>
            <TextWrapper><h2 className="h2">If you know any Oxygen Provider in your City, provide VERIFIED details</h2> 
                    {/* <Button>I Have Oxygen</Button> */}
                    <Link to={"./have"}> <Button>Submit Details</Button></Link>
                </TextWrapper>
                <Hr></Hr>         
                <TextWrapper><h2 className="h2">I Need Oxygen</h2> 
                    {/* <Button className="needButton">I need Oxygen</Button> */}
                    <Link to={"./need"}> <Button>Find Oxygen Near Me</Button></Link>
                </TextWrapper>
               
            </BodyWrapper>
            <VolunteerWrapper>
            <HeadingWrapper>
            <h1 className="h1">Become a Volunteer and Save Someone's Life in Your City</h1>
            <Link to={"./volunteer/agreement"}> <Button style={{backgroundColor:"#2f326b",alignItems:"center"}} className="button">Be a Volunteer</Button></Link>
            </HeadingWrapper>
            </VolunteerWrapper>
        </Wrapper>

    );
}
export default FrontPage;