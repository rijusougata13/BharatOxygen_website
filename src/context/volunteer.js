import React,{useState,createContext} from 'react';

export const VolunteerContext=createContext();

export const VolunteerProvider=(props)=>{
    const submitForm=()=>{

    };
    const [volunteerQuestions,setVolunteerQuestions]=useState({
       "Name":"",
    //    "DateOfBirth":"",
        "Phone":"",
       "Occupation":"",
       "Pincode":"",
       "City":"",
    //    "Address":"",
    });


    
    return (
        <VolunteerContext.Provider value={[volunteerQuestions,setVolunteerQuestions]}  >
            {props.children}
        </VolunteerContext.Provider>
    );
}



