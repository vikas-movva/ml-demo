import styled from "styled-components";
import {
  secondaryColor,
  buttonPrimaryColor,
  buttonSecondaryColor,
  buttonActiveColor,
  rotation,
} from "../../constants";
let height = window.innerHeight * (3 / 8);

// background rectangle for the sidebar that is angled
export const SidebarContainerBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  width: 75px;
  height: ${height}px;
  margin-top: -${height * 0.5}px;
  z-index: 100;
  border-radius: 25px;
  transform: rotate(-${rotation}deg);
  background-color: ${buttonSecondaryColor};
  box-shadow: 0px -4px 4px #000000;
`;

//main rectangle for the sidebar container for the links
export const SidebarContainer = styled.div`
  position: fixed;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${buttonPrimaryColor};
  transform: rotate(${rotation}deg);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px #000000;
  backdrop-filter: blur(2px);
  border-radius: 25px;
`;

//links styled component
export const SidebarLink = styled.a`
  display: flex;
  width: 53%;
  height: 20px;
  background-color: ${secondaryColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
  }
  &:active {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  }
`;
