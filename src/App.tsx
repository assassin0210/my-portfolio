import React, { useEffect } from "react";
import { LeftMenu } from "./components/LeftMenu";
import { Avatar } from "./components/Avatar";
import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import styled from "styled-components";
import { useTranslate } from "./hooks/translate";

function App() {
  const { t } = useTranslate();
  console.log(localStorage.getItem("lang"));
  console.log(t);
  useEffect(() => console.log(""), [t]);
  return (
    <Layout>
      <LeftMenu />
      <Avatar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contacts" element={<AboutMe />} />
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
