import React from "react";
import {
  SidebarContainerBg,
  SidebarContainer,
  SidebarLink,
} from "./sidebarElements";
import { buttonActiveColor } from "../../constants";
import { links } from "./links";
import { useState } from "react";

const Sidebar = () => {
  let style = {
    backgroundColor: buttonActiveColor,
  };
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <SidebarContainerBg>
        <SidebarContainer>
          {links.map((item, index) => {
            return (
              <SidebarLink
                href={item.url}
                style={index === activeIndex ? style : null}
                key={index}
                onClick={(e) => {
                  setActiveIndex(index);
                }}
              ></SidebarLink>
            );
          })}
        </SidebarContainer>
      </SidebarContainerBg>
    </>
  );
};

export default Sidebar;
