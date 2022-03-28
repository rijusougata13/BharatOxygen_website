
import React,{useState,createContext} from 'react';

export const UserHaveContext=createContext();

export const UserHaveProvider=(props)=>{
    const submitForm=()=>{

    };
    const [haveQuestions,setHaveQuestions]=useState({
        "ShopName": "",
        "Address": "",
        "Lane": "",
        "Landmark": "",
        "AreaName": "",
        "City":"",
        "State":"",  
        "PinCode":"",  
        "HomeDelivary":"",
        "TypeofSupply":"",
        "Refill":"",
        "Contact":"",
        "Contact2":"",

    });

    
    return (
        <UserHaveContext.Provider value={[haveQuestions,setHaveQuestions]}  >
            {props.children}
        </UserHaveContext.Provider>
    );
}



