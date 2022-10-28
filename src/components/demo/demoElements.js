import styled, { keyframes } from "styled-components";
import {
  primaryColor,
  secondaryColor,
  buttonPrimaryColor,
  buttonSecondaryColor,
  buttonActiveColor,
  rotation,
} from "../../constants";

export const DemoContainer = styled.div`
  height: ${window.innerHeight}px;
  width: 100%;
  display: grid;
  grid-template-columns: 22% auto 5%;
  grid-template-rows: 15% auto;
`;

export const DemoHeader = styled.h1`
  margin: 0;
  color: ${primaryColor};
  height: 11%;
  font-size: ${window.innerHeight * 0.1}px;
  grid-column-start: 2;
`;

export const CanvasWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-start: 2;
  grid-row-start: 2;
  place-items: center;
`;

export const ButtonBg = styled.div`
  height: 55px;
  width: ${window.innerWidth * 0.18}px;
  border-radius: 10px;
  transform: rotate(${(props) => props.rotation}deg);
  background-color: ${buttonSecondaryColor};
  grid-column-start: ${(props) => props.column};
  grid-row-start: ${(props) => props.row};
`;

export const Button = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props) => props.rotation}deg);
  background-color: ${buttonPrimaryColor};
  border-radius: 10px;
  border: 1px solid #000000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
`;

export const ButtonText = styled.p`
  margin: 0;
  color: black;
  font-size: 90%;
  background-color: rgba(255, 255, 255, 0);
  font-size: 2em;
  font-weight: 600;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);
  transition: text-shadow 0.2s ease-in-out;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Standard syntax */
  &:hover {
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.48);
  }
  &:active {
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;
