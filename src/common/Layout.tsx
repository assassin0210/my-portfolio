import React, { FC, useEffect, useMemo, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "../components/Menu";
import { scrollStylesCSS } from "../styled/common";

export const LayoutContainer: FC = () => {
  const { pathname } = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const data = useMemo(() => new Date().getFullYear().toString(), []);

  return (
    <Layout>
      <Header to="/">Shaker</Header>
      <Menu />
      <Container>
        <Outlet />
      </Container>
      <Footer>
        <span>сайт: up.alexsokol.ru</span>
        <span>Год: {data}</span>
      </Footer>
    </Layout>
  );
};

const Header = styled(Link)`
  grid-area: header;
  font-size: 33px;
  padding: 20px;
  color: ${({ theme }) => theme.color.green};
  background-color: ${({ theme }) => theme.color.darkGrey};
`;

const Container = styled.div`
  grid-area: article;
  background: white;
  overflow-y: scroll;
  ${scrollStylesCSS}
`;
const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
  gap: 40px;
  color: ${({ theme }) => theme.color.green};
  background-color: ${({ theme }) => theme.color.darkGrey};
`;
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "nav article article"
    "footer footer footer";
  grid-template-rows: 100px 1fr 60px;
  grid-template-columns: auto 1fr;
  height: 100vh;
  margin: 0;
`;
