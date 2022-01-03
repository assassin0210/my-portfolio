import { useCallback, useEffect, useState } from "react";
import LocalizedStrings from "react-localization";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../core/rootReducer";
import { setLang } from "../core/translateSlice";

const textContent = new LocalizedStrings({
  ru: {
    title: "ru",
    aboutMe: {
      title: "Обо мне",
      year: "26 лет",
      city: "Тирасполь",
      company: "Helium 10",
      text: "Я люблю знакомиться с новыми технологиями и использовать их в своих проектах. Нравится работать над мелочами и доводить их до идеала. Не обладаю консервативным складом ума всегда открыт к новому.",
      stack: "Мои навыки",
    },
    contactMe: {
      title: "Мои контакты",
      text: "Если у вас есть какие-либо вопросы относительно этого резюме , этого сайта или ваших отношений со мной, пожалуйста, не стесняйтесь обращаться по нижеуказанной электронной почте ,номеру телефона или социальным сетям",
    },
  },
  en: {
    title: "en",
    aboutMe: {
      title: "About me",
      year: "26 years",
      city: "Tiraspol",
      company: "Helium 10",
      text: "I like to get acquainted with new technologies and use them in my mountains. I like to work on little things and bring them to perfection. Not I have a conservative mindset, always open to new things.",
      stack: "My Stack",
    },
    contactMe: {
      title: "Contact me",
      text: "If you have any questions regarding this resume, this website or your relationship with me, please do not hesitate to contact me by the following email, phone number or social networks",
    },
  },
});
export const useTranslate = () => {
  const lang = useSelector<RootStateType>((state) => state.lang.lang);
  const [currentState, updateState] = useState(1);
  const forceUpdate = useCallback(
    () => updateState(currentState + 1),
    [currentState]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    textContent.setLanguage(lang as string);
    forceUpdate();
  }, [lang]);

  const setT = (toggle: boolean) => {
    if (!toggle) {
      dispatch(setLang("ru"));
    } else if (toggle) {
      dispatch(setLang("en"));
    }
  };

  return { lang, t: textContent, setT };
};
