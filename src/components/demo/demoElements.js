import styled, { keyframes } from "styled-components";
import {
  primaryColor,
  secondaryColor,
  buttonPrimaryColor,
  buttonSecondaryColor,
  buttonActiveColor,
  rotation,
} from "../../constants";

export const blink = keyframes`
  0% {
    opacity: 1;

  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const wobble = keyframes`
  0% {
    transform: rotate(${(props) => props.rotation});
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(${(props) => props.rotation});
  }
`;

export const DemoContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 22% auto 5%;
  grid-template-rows: 15% 5% auto;
`;

export const DemoHeader = styled.h1`
  margin: 0;
  color: ${primaryColor};
  height: 11%;
  font-size: 10vh;
  grid-column-start: 2;
`;
export const DemoInstructions = styled.p`
  margin: 0;
  color: ${primaryColor};
  height: 11%;
  font-size: 2vh;
  grid-column-start: 2;
`;
export const CanvasWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20px repeat(4, 1fr);
  grid-column-start: 2;
  grid-row-start: 3;
  place-items: center;
`;

export const ButtonBg = styled.div`
  height: 55px;
  width: 18vw;
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

export const BlinkingBar = styled.p`
  display: inline-block;
  margin: 0;
  color: inherit;
  font-size: inherit;
  background-color: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-shadow: inherit;
  animation: ${blink} 1s ease-in-out infinite;
`;

export const DemoImg = styled.img`
  transform: scale(2);
  margin-top: 10px;
`;

export const PredictCheck = styled.div`
  grid-column-start: ${(props) => props.column};
  grid-row-start: ${(props) => props.row};
`;

export const PredictCheckText = styled.p`
  color: ${primaryColor};
  font-size: 1.5em;
  margin: 0;
  margin-top: -50px;
`;
