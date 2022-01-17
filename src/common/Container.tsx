import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Container, Menu, ScrollSection } from "../styled/common";
import { media } from "../styled/media";
import { Caret } from "./Caret";
import { LeftMenu } from "../components/LeftMenu";
import { Avatar } from "../components/Avatar";

export const LayoutContainer: FC = () => {
  const [menu, setMenu] = useState(false);
  const setMenuHandler = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  const outClickRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideClick = (event: any) => {
      event?.stopPropagation();
      if (
        !outClickRef.current?.contains(event.path?.[0] || event.target) &&
        !buttonRef.current?.contains(event.path?.[0] || event.target)
      ) {
        setMenu(false);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => document.removeEventListener("click", outsideClick);
  }, []);

  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Container>
        <MobileGamburger ref={buttonRef}>
          <Caret toggle={menu} setToggle={setMenuHandler} />
        </MobileGamburger>
        <ScrollSection>
          <MobileMenu ref={outClickRef} menu={menu}>
            <LeftMenu />
          </MobileMenu>
          <Outlet />
        </ScrollSection>
      </Container>
    </Layout>
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
      right: -20px;
      height: 100%;
      position: absolute;
      display: block;
      width: 20px;
      margin-right: 10px;
      margin-top: 10px;
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
const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 6px 0;

  ${media.extraDesktopBefore} {
    padding: 26px 20px;
  }

  ${media.laptopBefore} {
    padding: 0;
  }
`;
