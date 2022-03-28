import React from 'react';
import {StyledButton} from './styles/index';


const Buttons = (props) => {
    return(
        <StyledButton>{props.children}</StyledButton>
    )
}
export default Buttons;