import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { Container, Menu } from "../styled/common";
import { media } from "../styled/media";
import { Caret } from "./Caret";
import { LeftMenu } from "../components/LeftMenu";

export const LayoutContainer: FC = ({ children }) => {
  const [menu, setMenu] = useState(false);
  console.log(menu);

  const setMenuHandler = useCallback(() => setMenu(!menu), [menu]);
  return (
    <Container>
      <Test>
        <Caret toggle={menu} setToggle={setMenuHandler} />
      </Test>
      <MobileMenu menu={menu}>
        <LeftMenu />
      </MobileMenu>
      {children}
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

const Test = styled.div`
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
