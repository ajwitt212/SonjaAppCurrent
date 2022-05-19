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



function Page7() {
  return (
    <div className="Page7">
      <h1>
      First Kiss
      </h1>
      <h3>
      March 7 2022
      </h3>
      <p>
      That was one of the best walks of my life. We talked about a lot of things and shared a lot of things. But by the end of it, we decided to talk about us. We agreed on taking it slow and feeling out the situation since it was new for both of us (which was exactly what I wanted to hear). We walked all the way around campus until we were forced to get back to Dykstra. But I didn’t want to go back inside, and I don’t think you did either. So we sat on the bench outside and talked about things I don’t remember. And then there was a silence. And you leaned over and kissed me. It was my first time, and I didn’t really know what to do, but after, all I could do was smile. And then a silence passed. And we got up and went inside.
      </p>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page8" target="_blank">
      <Button> Confirm </Button>
      <Button> Deny </Button>
      </a>
      </div>
    </div>
  );
}

export default Page7;