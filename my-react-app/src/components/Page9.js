import React from "react";
import styled from "styled-components"

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 6px;
  margin: 10px 0px;
  cursor: pointer;
`;

function Page9() {
    return (
      <div className="Page7">
        <h1>
        The Answer
        </h1>
        <h3>
        May 19 2022
        </h3>
        <p>
        Will you go to prom with me?
        </p>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
        <a href="http://localhost:3000/page1" target="_blank">
        <Button> Yes </Button>
        <Button> No </Button>
        </a>
        </div>
      </div>
    );
  }
  
  export default Page9;