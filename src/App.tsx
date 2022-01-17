import React, { useEffect } from "react";
import { Routes } from "./Routes";
import { useDispatch } from "react-redux";
import { getWorkRequest } from "./store/requests/getWork";
import { getStackRequest } from "./store/requests/getStack";
import { getSkillsRequest } from "./store/requests/getSkillsRequest";

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
