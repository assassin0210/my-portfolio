import { useEffect } from "react";

export const useTranslate = () => {
  useEffect(() => {
    localStorage.getItem("lang");
  }, [localStorage.getItem("lang")]);
  return { t: localStorage.getItem("lang") };
};
