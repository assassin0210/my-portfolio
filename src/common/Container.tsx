import React, { FC, useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container, Menu, ScrollSection } from "../styled/common";
import { media } from "../styled/media";
import { Caret } from "./Caret";
import { LeftMenu } from "../components/LeftMenu";

export const LayoutContainer: FC = () => {
  const [menu, setMenu] = useState(false);

  const setMenuHandler = useCallback(() => setMenu(!menu), [menu]);
  return (
    <Container>
      <ScrollSection>
        <MobileGamburger>
          <Caret toggle={menu} setToggle={setMenuHandler} />
        </MobileGamburger>
        <MobileMenu menu={menu}>
          <LeftMenu />
        </MobileMenu>
        <Outlet />
      </ScrollSection>
    </Container>
  );
};
const MobileMenu = styled.div<{ menu?: boolean }>`
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  top: 0;
  left: ${({ menu }) => (menu ? "0" : "-90px")};
  height: 100%;

  ${Menu} {
    display: flex;
    height: 100%;
    :before {
      content: "";
      top: 0;
      right: -30px;
      height: 100%;
      position: absolute;
      display: block;
      width: 20px;
      margin-right: 10px;
      margin-top: 10px;
      z-index: 100;
      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.color.darkGrey} 45%,
        ${({ theme }) => theme.color.darkGrey} 23%,
        transparent 100%
      );
    }
  }
  ${media.laptop} {
    display: none;
  }
`;
const MobileGamburger = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px 20px;
  display: block;
  ${media.laptop} {
    display: none;
  }
`;
