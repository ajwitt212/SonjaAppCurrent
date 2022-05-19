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



function Page5() {
  return (
    <div className="Page5">
      <h1>
      The Hackathon
      </h1>
      <h3>
      February 19 2022
      </h3>
      <p>
      Roughly two weeks after the bag fumbling was hackathon time. Up to that point, we’d kept talking, but I don’t think either of us knew where we stood. Now enter 36 hours of pure coding madness. After setting up the app and working to fix it, I started to get burnt out until I got the call from you asking if I wanted an insomnia cookie. You visited us a few times that night, each time bringing a breath of fresh air to the madness. I loved coding the app, but I loved those breaks so much more. Eventually, on the last night, you called me asking if I wanted to come watch F1. I really did, and I told you I’d come at midnight. We finished at 4am. The app couldn’t be completed due to connection issues, and all our work was for nothing. Dejected, I called you, 100% sure you were asleep. But you picked up the phone. I came to your room and saw you for the first time that night. Suddenly I wasn’t so dejected anymore. We watched the Bachelor at 200mph, with the screeching sound of V8 engines and all (very romantic). And we talked until the sun came up for the morning. It was the first time I’d stayed up through the night like that. It was in that moment that all the fears from two weeks ago went away. And I knew this was something I wanted. All I had to do was muster the courage to ask.
      </p>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page6" target="_blank">
      <Button> Confirm </Button>
      <Button> Deny </Button>
      </a>
      </div>
    </div>
  );
}

export default Page5;