import { useEffect, useState } from "react";

export const useTranslate = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  useEffect(() => {
    setLang(localStorage.getItem("lang"));
  }, [lang]);
  return { t: lang };
};
