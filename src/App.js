import React from "react";
import { BodyWrapper } from "./component/shared/styledelement";

import Header from "./component/header/Header";
import BodyMain from "./component/body/BodyMain";

function App() {
  return (
    <BodyWrapper>
      <Header />
      <BodyMain />
    </BodyWrapper>
  );
}

export default App;
