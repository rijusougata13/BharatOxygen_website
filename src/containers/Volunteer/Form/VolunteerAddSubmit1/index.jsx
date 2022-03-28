import React,{useState,useContext} from 'react';
import {Button,  Input, TextWrapper, Wrapper} from './styles/index';
import { Link,useHistory } from 'react-router-dom';
import {UserHaveContext} from '../../../../context/userHaveOxygen';
// import firebase from '../../../../firebase';
import {addSupplier} from '../../../../services/firebase_services/firestore_services';
const VolunteerAddSubmit1=()=>{

    const history=useHistory();
    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    const [shopName,setShopName]=useState('');
    const [buildingNo,setBuildingNo]=useState('');
    const [lane,setLane]=useState('');
    const [landmark,setLandMark]=useState('');
    const [city,setCity]=useState('');


    const AddUser = obj => {
        addSupplier(obj).then(()=>console.log("Ok")).catch((err)=>console.log(err));
    }


    const send=()=>{
        setHaveQuestions(prevQ=>({...prevQ,"ShopName":shopName,"BuildingNo":buildingNo,"Lane":lane,"Landmark":landmark,"City":city}));
        // props.clicked();
        //  AddUser(haveQuestions)
        if(window.confirm("Data Saved Successfully !")){
            //    return <Redirect  to="/AddSupplier" />
                // alert("DAS")
                AddUser(haveQuestions)
                // console.log(haveQuestions)
                history.push('/have/submit1')
            }
            else {
                alert("Please Click Okay Button !")
            }
    }
    return(
        <Wrapper>
            <TextWrapper>
                <h1>Enter Oxygen Supplier Details </h1>
               <Input type="text" required placeholder="Supplier Name" onChange={e=>setShopName(e.target.value)}/>   
               {/* <Input type="text" required placeholder="Shop no./House no./Building"onChange={e=>setBuildingNo(e.target.value)}/> */}
               <Input type="text" required placeholder="Lane/Street"onChange={e=>setLane(e.target.value)} />  
               <Input type="text" required placeholder="Landmark" onChange={e=>setLandMark(e.target.value)}/>    
             
               <Input type="text" required placeholder="City" onChange={e=>setCity(e.target.value)} />
                {
                    (shopName  && lane )?<Link to={"/AddSupplier"}> <Button onClick={send} >Submit</Button> </Link>
                    :<h3 style={{color:"red"}}>Please Complete All Details</h3>
                }
                {/* <button onClick={e=>console.log(haveQuestions)} >button</button> */}
             </TextWrapper>
        </Wrapper>

    );
}
export default VolunteerAddSubmit1;