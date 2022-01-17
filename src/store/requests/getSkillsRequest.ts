import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./baseRequest";
import { ISkill } from "../slices/skillsSlice";

export const getSkillsRequest = createAsyncThunk(
  "data/stack",
  async function (_) {
    const response = await instance.get<ISkill[]>("/data/skills.json");
    return response.data;
  }
);
