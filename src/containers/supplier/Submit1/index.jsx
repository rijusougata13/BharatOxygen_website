import React,{useState,useContext} from 'react';
import {Button,  Input, TextWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';
import {UserHaveContext} from '../../../context/userHaveOxygen';

const Submit1=()=>{
    const [haveQuestions,setHaveQuestions]=useContext(UserHaveContext);
    const [shopName,setShopName]=useState('');
    const [buildingNo,setBuildingNo]=useState('');
    const [lane,setLane]=useState('');
    const [landmark,setLandMark]=useState('');
    const [contact2,setContact2]=useState('');
    const [city,setCity]=useState('');
    const [auth,setAuth]=useState(false);
    // const [buttonDisable,setButtonDisable]=useState(false);
    const send=()=>{
        setAuth(true);
        setHaveQuestions(prevQ=>({...prevQ,"ShopName":shopName,"BuildingNo":buildingNo,"Lane":lane,"Contact2":contact2,"City":city,"PinCode":landmark}));
        // props.clicked();
    }
    return(
        <Wrapper>
            <TextWrapper>
                <h1>Enter Oxygen Supplier Details </h1>
                
               {/* <Input type="text" required placeholder="Address" onChange={e=>setShopName(e.target.value)}/>    */}
            
               <Input type="text" required placeholder="Supplier Name" onChange={e=>setShopName(e.target.value)}/>   
               {/* <Input type="text" required placeholder="Shop no./House no./Building"onChange={e=>setBuildingNo(e.target.value)}/> */}
                
                  
               <Input type="text" required placeholder="Phone Number 2 (optional)" onChange={e=>setContact2(e.target.value)}/>    
               <Input type="text" required placeholder="City" onChange={e=>setCity(e.target.value)} />
               <Input type="text" required placeholder="Locality" onChange={e=>setLane(e.target.value)} /> 
               <Input type="text" required placeholder="PinCode" onChange={e=>setLandMark(e.target.value)}/> 
               {/* <Input type="text" required placeholder="State" onChange={e=>setState(e.target.value)}/> */}

               {/* <Input type="text" required placeholder="Landmark" onChange={e=>setLandMark(e.target.value)}/>     */}
                {
                    (shopName && city   && lane )?<Link to={"./delivary"}> <Button onClick={send} >Next</Button> </Link>
                    :<h3 style={{color:"red"}}>Please Complete All Details</h3>
                }
                
             </TextWrapper>
        </Wrapper>

    );
}
export default Submit1;