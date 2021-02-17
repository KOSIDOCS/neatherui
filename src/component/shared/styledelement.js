import styled from "styled-components";
import { darken, saturate } from "polished";
import theme from "./theme";

export const BoxWrapper = styled.div`
  padding: 1.3em;
  background: ${(prop) => (prop.color ? theme.lightGrey : theme.lightBlue)};
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${(prop) =>
      prop.color ? darken(0.1, theme.lightGrey) : darken(0.1, theme.lightBlue)};
  border-radius: 0.8rem;
  margin-right: 1.2em;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const BodyBox = styled.div`
  padding: 1.7em;
  background: ${theme.light};
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.light};
  border-radius: 0.9rem;
  width: 100%;
`;

export const BodyWrapper = styled.div`
  margin: auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const HeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem 0 1rem;
  font-weight: 700;
  font-size: 1.3em;
  color: ${darken(0.1, theme.lightGreen)};
  height: 56px;
  line-height: 64px;
  cursor: pointer;
  background-color: ${theme.light};
  border: none;
  outline: none;
  appearance: none;
  border-radius: 12px;
  position: relative;
  top: 3.3em;
  margin-left: 3.8em;

  & .rectangle {
    margin-left: 1.6em;
  }

  @media (max-width: 1024px) {
    top: 0;
  }
`;

export const SecondBtn = styled(Btn)`
  margin-left: 2.48em;
  margin-right: 1.4em;
  top: 2.6em;

  @media (max-width: 1024px) {
    top: 0;
  }
`;

export const LeftBtn = styled(Btn)`
  font-weight: 400;
  font-size: 0.8em;
  color: ${theme.textMain};
  background: ${theme.button};
  border-radius: 0;
  top: 0;
  margin-left: 0;
  padding: 0.4em 1.9em;
  height: 30px;

  &:last-of-type {
    margin-left: 0.9em;
  }
`;

export const RightBtn = styled(Btn)`
  font-weight: 700;
  font-size: 1.1em;
  color: ${theme.longtext};
  background: ${theme.long};
  padding: 0.4em 1.6em;
  top: 0;
  height: 45px;
  margin-bottom: 1.5em;

  @media (max-width: 1024px) {
    padding: 0.7em 1em;
    width: 300px;
    text-align: center;
    margin-top: 10px;
  }
`;

export const BottomBtn = styled(Btn)`
  background: ${saturate(0.3, theme.mainBlue)};
  color: ${theme.light};
  top: 0;
  font-weight: 300;
  padding: 0.7em 1.9em;
  height: 40px;
  font-size: 1.1em;
  border-radius: 6px;

  @media (max-width: 1024px) {
    padding: 0.7em 1em;
    width: 250px;
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
`;
