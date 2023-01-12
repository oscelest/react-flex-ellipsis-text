import React from "react";
import FlexEllipsisText from "../src/components/FlexEllipsisText";

function IndexPage() {
  
  return (
    <div>
      <FlexEllipsisText style={{maxWidth: "200px"}}>
        Test
      </FlexEllipsisText>
      <br/>
      <FlexEllipsisText style={{maxWidth: "200px"}}>
        Hello World! This is a very long text that should be clipped by the ellipsis text!
      </FlexEllipsisText>
    </div>
  );
}

export default IndexPage;
