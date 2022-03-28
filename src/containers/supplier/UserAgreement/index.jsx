import React, { useContext } from 'react';
import {AgreementText, BodyWrapper, Button, ButtonWrapper, HeadingWrapper,  Wrapper} from './styles/index';
import { Link,useHistory } from 'react-router-dom';
import {UserHaveContext} from  '../../../context/userHaveOxygen';
import firebase from '../../../services/firebase_services/firebase_config';
import {addSupplier} from '../../../services/firebase_services/firestore_services';

const UserAgreement=()=>{
    console.log("firestore");

    // console.log(firestore);
    const history=useHistory();
    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    
    const AddUser = obj => {
        addSupplier(obj).then(()=>console.log("Ok")).catch((err)=>console.log(err));
    }
   
   

    const submit =()=>{
        // setHaveQuestions(prevQ=>({...prevQ,"HomeDelivary":homeDelivary,"TypeofSupply":supply,"Refill":refill}));
         if(haveQuestions["ShopName"]==='' ||  haveQuestions["Contact"]==='' ){
             history.push('./');
            alert("Please Fill the details");
         }
         else{

             AddUser(haveQuestions)
             if(window.confirm("Data Saved Successfully !")){
                //    return <Redirect  to="/AddSupplier" />
                    // alert("DAS")
        
                    // AddUser(haveQuestions)
                     history.push('./delivary')
                    // console.log(haveQuestions);
                }
                else {
                    alert("Please Click Okay Button !")
                }
         }
        console.log(haveQuestions);
    
    }

    return(
        <Wrapper>
            <BodyWrapper>
                <HeadingWrapper>Please Read Carefully</HeadingWrapper>
                <AgreementText>
                    <ul>
                        <li>Whatever data you input, it must be correct to your knowledge, so please input correct information beacuse you are responsible for saving someone's life.</li>
                        <br/>
                        <li>You understand that your contact details will be visible to users and people who need oxygen may contact you for help.</li>
                    </ul>
                </AgreementText>
                <ButtonWrapper>
                 {/* <Link to={'/need'}> <Button style={{background: 'green'}}  onClick={handleClick}>Yes,I Agree</Button></Link>
                 <Link to={'/'}> <Button style={{background: 'red'}}>No,I Decline</Button> </Link> */}
                  <Link to={'/'}> <Button style={{background: 'green'}} onClick={submit} > Yes, I Agree</Button></Link>
                 <Link to={'/'}>    <Button style={{background: 'red'}}>No, I Decline</Button> </Link>
                </ButtonWrapper>
            </BodyWrapper>
        </Wrapper>

    );
}
export default UserAgreement;