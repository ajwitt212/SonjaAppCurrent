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



function Page3() {
  return (
    <div className="Page3">
      <h1 className="header">
      First time we met (actually) 
      </h1>
      <h3 className="header2">
      January 17 2022
      </h3>
      <p className="paragraph">
      One quarter and a mini pandemic resurgence later, I actually got to meet you. I’d just come in from my house and made the 7-hour drive. I was exhausted but wanted to see people, so I called Karina and Chris to see if we could meet up. Karina asked if she could bring her roommate, some girl named “Sonja.” I didn’t mind—I always like meeting new people. I walked into the Gardenia 4 lounge and there you were, curly black hair, brown eyes and all. I don’t remember the specifics of that night but I remember glimpses. You snorting at the table for the first time over Jet’s buffalo story. Exchanging stories about crazy high school teachers. Me accidentally kicking you when you fell asleep by my feet when watching Boba Fett. It was one of the best nights I’d had at UCLA so far. Little did I know it would be the first of many.

      </p>
      <div  
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page4" target="_blank">
      <button className="button"> Confirm </button>
      <button className="button"> Deny </button>
      </a>
      </div>
    </div>
  );
}

export default Page3;