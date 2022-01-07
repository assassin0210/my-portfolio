import { useCallback, useEffect, useState } from "react";
import LocalizedStrings from "react-localization";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../core/rootReducer";
import { setLang } from "../core/translateSlice";

const textContent = new LocalizedStrings({
  ru: {
    title: "ru",
    name: "Александр Соколов",
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
    myWorks: {
      title: "Мои работы",
      description:
        "Здесь находятся все проекты что я делал за исключением корпоративных. В них отображены все мои основные навыки. Часть из них учебных , на которых я учился.",
    },
    resume: {
      title: "Резюме",
      text: {
        one: "2 года в frontend ",
        two: "1 год в команде",
        three: "Middle Frontend ",
      },
      subtitle:
        "Frontend developer с 2 летним опытом проектирования и разработки пользовательских интерфейсов . Начинал верстальщиком. Сейчас работаю  с использованием  в своих проектах TypeScript и реакт.  Пол года опыт работы с GitHub в команде . Проходил курсы по Photoshop Illustrator.",
    },
  },
  en: {
    title: "en",
    name: "Alexandr Sokolov",
    aboutMe: {
      title: "About me",
      year: "26 years",
      city: "Tiraspol",
      company: "Helium 10",
      text: "I like to get acquainted with new technologies and use them in my mountains. I like to work on little things and bring them to perfection. Not I have a conservative mindset, always open to new things.",
      stack: "My stack",
    },
    contactMe: {
      title: "Contact me",
      text: "If you have any questions regarding this resume, this website or your relationship with me, please do not hesitate to contact me by the following email, phone number or social networks",
    },
    myWorks: {
      title: "My works",
      description:
        "Here are all the projects that I have done with the exception of corporate ones. They display all my basic skills. Some of them are educational ones that I studied at.",
    },
    resume: {
      title: "Resume",
      text: {
        one: "2 years in the frontend ",
        two: "1 year in the team",
        three: "Middle Frontend ",
      },
      subtitle:
        "Frontend developer with 2 years of experience in designing and developing user interfaces . I started as a layout designer. Now I am working with the use of TypeScript and react in my projects. Half a year of experience working with GitHub in a team . I took courses in Photoshop Illustrator.",
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
