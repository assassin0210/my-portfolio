import React from "react";
import { LeftMenu } from "./components/LeftMenu";
import { Avatar } from "./components/Avatar";

import styled from "styled-components";

import { media } from "./styled/media";
import { Routes } from "./Routes";

function App() {
  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Routes />
    </Layout>
  );
}

export default App;

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
