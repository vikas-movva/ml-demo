import styled from "styled-components";
let height = document.getVeiwportHeight();

export const SidebarContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 15px;
  width: 300px;
  height: {height}px;
  margin-top: -50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;
