import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes } from "./Routes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getWorkRequest());
    // dispatch(getStackRequest());
    // dispatch(getSkillsRequest());
  }, [dispatch]);
  return <Routes />;
}

export default App;
