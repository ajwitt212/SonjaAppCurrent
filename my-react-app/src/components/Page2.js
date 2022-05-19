import React from "react";
import styled from "styled-components"

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;



function Page2() {
  return (
    <div className="Page1">
      <h1>
      First time we met (Kinda) 
      </h1>
      <h3>
      October 30 2021
      </h3>
      <p>
      I was playing 51, trying not to lose horrifically to Karina, when I saw her look up as you, Kylee and Laura came walking into the lounge back from some Halloween party. Karina said you were her roommates, and I must’ve given some awkward wave and introduced myself when you said your first words to me. “Can you give that Milky Way?” I tossed it to you, and you hugged Karina and left with a singsong “Byeeee.” It was an encounter I never thought I would remember, but it became important later.
      </p>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page3" target="_blank">
      <Button> Confirm </Button>
      <Button> Deny </Button>
      </a>
      </div>
    </div>
  );
}

export default Page2;