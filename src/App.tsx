import React from "react";
import { LeftMenu } from "./components/LeftMenu";
import { Avatar } from "./components/Avatar";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import styled from "styled-components";
import { ContactMe } from "./components/ContactMe";
import { MyWorks } from "./components/MyWorks";
import { Resume } from "./components/Resume";
import { media } from "./styled/media";

function App() {
  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contacts" element={<ContactMe />} />
        <Route path="/my-works" element={<MyWorks />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
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
