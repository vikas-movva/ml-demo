import styled from "styled-components";
let height = window.innerHeight * (3 / 8);
let rotation = 12;
export const SidebarContainerBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50px;
  width: 75px;
  height: ${height}px;
  margin-top: -${height * 0.5}px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  z-index: 100;
  border-radius: 25px;
  transform: rotate(-${rotation}deg);
  background-color: #737578;
  box-shadow: 0px -4px 4px #000000;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  height: inherit;
  width: inherit;
  display: flex;
  background-color: rgba(255, 245, 245, 0.85);
  transform: rotate(${rotation}deg);
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px #000000;
  backdrop-filter: blur(2px);
  border-radius: 25px;
`;
//linksContainer styled component
export const SidebarLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

//links styled component
export const SidebarLink = styled.li``;
