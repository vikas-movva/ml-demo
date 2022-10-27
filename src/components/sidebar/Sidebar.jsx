import React from "react";
import { SidebarContainerBg, SidebarContainer } from "./sidebarElements";

const Sidebar = () => {
  console.log(window.innerHeight);
  return (
    <>
      <SidebarContainerBg>
        <SidebarContainer></SidebarContainer>
      </SidebarContainerBg>
    </>
  );
};

export default Sidebar;
