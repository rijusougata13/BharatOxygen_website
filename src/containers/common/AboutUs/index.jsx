import React from 'react'
import { Img, Wrapper,TextWrapper } from "./styles";
import  Logo  from "../../../assets/logo2x.png";
const AboutUs = () => {
    return (
        <Wrapper>
           
            <TextWrapper>
                <h1 >What is Bharat Oxygen?</h1>
               

               
                

                

                
                    <h4> 1. We are a group of volunteers who have come together to set up this platform for helping needy find oxygen as close to them as possible. </h4>
                    <h4> 2. Our data is crowd sourced. The visitors to this platform can share the information if they or someone they know is oxygen supplier in their city. </h4>
                    <h4>3. We are also building a team of City Volunteers across India. Please join us if you wish to help India in these difficult times. </h4>
                    <h4>4. While we serve oxygen related needs through this platform, we also have a section on our home page where people can find resources for other needs such as ICU beds, medicines, food, etc.</h4>
                    <h4>5. Let's all unite to help each other and let's get out of this crisis together. No one should leave behind is our motto.</h4>
                     <h3 style={{textAlign:"center"}}>   For more information or any queries contact us at bharatoxygen2021@gmail.com</h3>
            </TextWrapper>
            {/* <ImageWrapper> */}
            <Img src={Logo}/>
            {/* </ImageWrapper> */}
        </Wrapper>
    )
}

export default AboutUs; 