import React from "react";
import styled from "styled-components"

function Page8() {
  return (
    <div className="Page7">
      <h1 className="header">
      The Question
      </h1>
      <h3 className="header2">
      May 19 2022
      </h3>
      <p className="paragraph">
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
      <button className="button"> Next </button>
      </a>
      </div>
    </div>
  );
}

export default Page8;