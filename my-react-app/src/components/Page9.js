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
        <h1 className="header">
        The Answer
        </h1>
        <h3 className="header2">
        May 19 2022
        </h3>
        <p className="paragraph" id="question">
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
        <button className="button"> Yes </button>
        <button className="button"> Also yes </button>
        </a>
        </div>
      </div>
    );
  }
  
  export default Page9;