import React from "react";
import { LeftMenu } from "./components/LeftMenu";
import { Avatar } from "./components/Avatar";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import styled from "styled-components";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contacts" element={<ContactMe />} />
        <Route path="/my-works" element={<AboutMe />} />
        <Route path="/resume" element={<AboutMe />} />
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
`;
