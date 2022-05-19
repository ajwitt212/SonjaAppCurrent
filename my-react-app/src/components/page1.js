import React from "react";
import styled from "styled-components"


function Page1() {
  return (
    <div className="Page1">
      <h1 className="header">
      Hey, we finally got this thing working after like 80 years, but I can’t remember every snort. So to test it, I’ll just run through some other dates instead. All you’ve gotta do is confirm or deny if they happened so we can see if the system works. Have fun. 
      </h1>
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <a href="http://localhost:3000/page2" target="_blank">
        <button className="button"> Continue </button>
      </a>
      </div>

    </div>
  );
}

export default Page1;