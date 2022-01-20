import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWorkRequest } from "./store/requests/getWork";
import { getStackRequest } from "./store/requests/getStack";
import { getSkillsRequest } from "./store/requests/getSkillsRequest";
import { Routes } from "./Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkRequest());
    dispatch(getStackRequest());
    dispatch(getSkillsRequest());
  }, [dispatch]);
  return <Routes />;
}

export default App;
