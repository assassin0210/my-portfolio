import { Link, useMatch } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";

export const CustomLink: FC<{ to: string }> = ({ to, children }) => {
  const match = useMatch(to);
  return (
    <LinkStyle $active={!!match} to={to}>
      {children}
    </LinkStyle>
  );
};
const LinkStyle = styled(Link)<{ $active: boolean }>`
  svg {
    font-size: ${({ $active }) => $active && "40px"};
  }
  path {
    fill: ${({ $active }) => $active && "#00c483"};
    font-size: 35px;
    transition: all 0.2s ease-in-out;
  }
`;
