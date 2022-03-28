import React, { useState, useContext } from "react";
import { Button, QuestionWrapper, TextWrapper, Wrapper } from "./styles/index";
import { Link, useHistory } from "react-router-dom";
import { UserHaveContext } from "../../../context/userHaveOxygen";

const HomeDelivery = () => {
  const history = useHistory();
  const [haveQuestions, setHaveQuestions] = useContext(UserHaveContext);
  const [firstQ, setFirstQ] = useState(false);
  const [secondQ, setSecondQ] = useState(false);

  const submit = () => {
   
  };

  

  const clicked = (id, value) => {
    if (id === "Question1Y" || id === "Question1N") {
      document.getElementById("Question1N").style.backgroundColor = "#f2f2f2";
      document.getElementById("Question1Y").style.backgroundColor = "#f2f2f2";
      document.getElementById(id).style.backgroundColor = "#5c9a79";
      setFirstQ(true);
      // setHomeDelivaty(value);
      setHaveQuestions((prevQ) => ({ ...prevQ, HomeDelivary: value }));
    } else if (
      id === "Question2Y" ||
      id === "Question2N" ||
      id === "Question2YN"
    ) {
      document.getElementById("Question2N").style.backgroundColor = "#f2f2f2";
      document.getElementById("Question2Y").style.backgroundColor = "#f2f2f2";
      document.getElementById("Question2YN").style.backgroundColor = "#f2f2f2";
      document.getElementById(id).style.backgroundColor = "#5c9a79";
      setSecondQ(true);
      // setSupply(value);
      setHaveQuestions((prevQ) => ({ ...prevQ, TypeofSupply: value }));
    }
   
  };

  return (
    <Wrapper>
      <TextWrapper>
        <QuestionWrapper>
          <h1>Is Home Delivery Available? </h1>
          <Button
            id="Question1Y"
            className="Question"
            onClick={() => clicked("Question1Y", "Home Delivery Available")}
          >
            Yes
          </Button>
          <Button
            id="Question1N"
            className="Question"
            onClick={() => clicked("Question1N", "")}
          >
            No
          </Button>
        </QuestionWrapper>
        <QuestionWrapper>
          <h1> What Type of Oxygen Supply is Available ? </h1>

          <Button
            id="Question2Y"
            className="Question"
            onClick={() => clicked("Question2Y", "Empty Cylinder Available")}
          >
            Empty Oxygen Cylinder
          </Button>
          <Button
            id="Question2N"
            className="Question"
            onClick={() => clicked("Question2N", "Filled Cylinder Available")}
          >
            Filled Oxygen Cylinder
          </Button>
          <Button
            id="Question2YN"
            className="Question"
            onClick={() =>
              clicked("Question2YN", "Empty & Filled Cylinder Available")
            }
          >
            Both
          </Button>
        </QuestionWrapper>
      

        <Link to={"./agreement"}>
          {" "}
          <Button onClick={submit}>Submit</Button>{" "}
        </Link>
      </TextWrapper>
    </Wrapper>
  );
};
export default HomeDelivery;
