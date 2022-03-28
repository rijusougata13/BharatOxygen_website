import React from 'react';
import {Button, ButtonWrapper, TextWrapper, Wrapper} from './styles/index';
import { Link } from 'react-router-dom';

const AddSupplier=()=>{
 
    return(
        <Wrapper>
           
            <TextWrapper>
            <h1>Add Oxygen Supplier To The List</h1>
                  <ButtonWrapper>
                  <Link to={"/have"}>  <Button>Add More Supplier</Button></Link>
                  <Link to={"/"}>  <Button>Back To Home</Button></Link>
                  </ButtonWrapper>
             </TextWrapper>
        </Wrapper>

    );
}
export default AddSupplier;