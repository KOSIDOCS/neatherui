import React from "react";

import { BodyBox } from "../shared/styledelement";
import TopContent from "./TopContent";
import MiddleContent from "./MiddleContent";
import SummaryContent from "./SummaryContent";
import BottomContent from "./BottomContent";

const BodyMain = () => {
  return (
    <BodyBox>
      <TopContent />
      <MiddleContent />
      <SummaryContent />
      <BottomContent />
    </BodyBox>
  );
};

export default BodyMain;
