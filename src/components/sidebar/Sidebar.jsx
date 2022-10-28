import React from "react";
import {
  SidebarContainerBg,
  SidebarContainer,
  SidebarLink,
} from "./sidebarElements";
import { links } from "./links";

const Sidebar = () => {
  return (
    <>
      <SidebarContainerBg>
        <SidebarContainer>
          {links.map((item, index) => {
            return (
              <SidebarLink
                href={item.url}
                selected={false}
                key={index}
              ></SidebarLink>
            );
          })}
        </SidebarContainer>
      </SidebarContainerBg>
    </>
  );
};

export default Sidebar;
