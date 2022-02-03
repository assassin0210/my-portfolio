import React, { FC } from "react";
import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";

export const Menu = () => {
  return (
    <MenuWrapper>
      <List>
        <CustomLink to={"/"}>Ингредиенты</CustomLink>
        <CustomLink to={"/cocktails"}>Коктейли</CustomLink>
      </List>
    </MenuWrapper>
  );
};
const MenuWrapper = styled.div`
  grid-area: nav;
  background-color: ${({ theme }) => theme.color.darkGrey};
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px;
  padding-top: 50px;
`;
const CustomLink: FC<{ to: string }> = ({ to, children }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <LinkStyle $active={!!match} to={to}>
      {children}
    </LinkStyle>
  );
};

const LinkStyle = styled(Link)<{ $active: boolean }>`
  color: ${({ $active, theme }) => $active && theme.color.green};
`;
