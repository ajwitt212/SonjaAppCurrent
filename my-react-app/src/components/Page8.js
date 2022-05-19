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



function Page8() {
  return (
    <div className="Page7">
      <h1>
      The Question
      </h1>
      <h3>
      May 19 2022
      </h3>
      <p>
      Now there have been a bunch of moments since then, and I’m sure I could write more paragraphs, but I’ll spare you from hearing me ramble. Instead, the next memory is up to you.
      </p>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page9" target="_blank">
      <Button> Confirm </Button>
      <Button> Deny </Button>
      </a>
      </div>
    </div>
  );
}

export default Page8;