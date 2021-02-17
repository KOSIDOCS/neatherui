import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";
import { saturate } from "polished";

import { HeaderWrapper, HeaderMain } from "../shared/styledelement";
import BigBox from "./BigBox";
import SmallBox from "./SmallBox";

const Header = () => {
  return (
    <HeaderMain>
      <HeaderWrapper>
        <BigBox />
        <SmallBox />
      </HeaderWrapper>
      <Subheader>
        <TradeText>Trade Feed</TradeText>
        <Dot />
        <VirtText>Virtually CO-Invest in the best ideas (405)</VirtText>
      </Subheader>
    </HeaderMain>
  );
};

const Subheader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.4em;
`;

const TradeText = styled.span`
  color: ${saturate(0.1, theme.mainBlue)};
  font-weight: 400;
  font-size: calc(16px + (38 - 16) * ((100vw - 400px) / (1600 - 400)));
  line-height: 2em;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${theme.textMain};
  position: relative;
  top: calc(16px + (38 - 16) * ((100vw - 400px) / (1600 - 400)));
  margin-left: 15px;
  margin-right: 15px;
`;

const VirtText = styled.span`
  color: ${saturate(0.1, theme.textMain)};
  font-weight: 400;
  font-size: calc(16px + (38 - 16) * ((100vw - 400px) / (1600 - 400)));
  line-height: 2em;
`;

export default Header;
