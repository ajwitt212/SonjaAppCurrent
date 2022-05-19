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



function Page6() {
  return (
    <div className="Page6">
      <h1>
      First Date
      </h1>
      <h3>
      March 6 2022
      </h3>
      <p>
      Turns out mustering that courage takes much longer than I was expecting. All it took was 3 more weeks and my cousin telling me I was an idiot for me to be ready. I don’t know what strings Rupin pulled behind the scenes, but suddenly we were watching Batman together in Westwood, and it was my chance. I’d prepped all night with the coaching of Akrit and Satva. I got a flannel, put on cologne (with some difficulty), and promised Akrit that no matter what, I would pay for the tickets or else he would “rock my shit.” For the first time, I was feeling nervous seeing you. It was dawning on me that this was really happening. Was I gonna ruin this by asking, would I make the wrong move, say the wrong thing? There were a million thoughts going through my head, but when I saw you they all disappeared. It was just like that first night back in Gardenia. There was no pressure, just fun. We walked through Westwood, and—for the record—I did pay for the tickets (I’m safe from Akrit). The movie was good, even if the cops were aggressively from Manhattan. I remember you putting your head on my shoulder and me taking the ticket and putting it in my wallet. And then it was over. We had to walk back; it was time. I remember the conversation back as I desperately looked for a way to segue into asking you out. I had all these fancy ways to do it in my head, but by the time I was ready to say that, we were back at Dykstra. Shit. I had run out of time. I needed to say something, so I decided on “Hey, I like you.” Very smooth. And you replied with a laugh followed by “I like you too.” And then we took a walk.
      </p>
      <div 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <a href="http://localhost:3000/page7" target="_blank">
      <Button> Confirm </Button>
      <Button> Deny </Button>
      </a>
      </div>
    </div>
  );
}

export default Page6;