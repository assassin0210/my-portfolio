import {
  faInstagram,
  faLinkedinIn,
  faTelegramPlane,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import waxon from "./static/works/waxon.jpg";
import tesla from "./static/works/tesla.jpg";
import music from "./static/works/music.jpg";
import pizza from "./static/works/pizza.jpg";
import basketboll from "./static/works/basketboll.jpg";
import summary from "./static/works/summary.jpg";
import game from "./static/works/game.jpg";
import registration from "./static/works/registration.jpg";
import portfolio from "./static/works/portfolio.jpg";

import webstorm from "./static/stack/webstorm.jpg";
import react from "./static/stack/react.png";
import github from "./static/stack/github.png";
import redux from "./static/stack/redux.jpeg";
import html from "./static/stack/html.png";
import reatom from "./static/stack/reatom.jpg";
import hookForm from "./static/stack/hook-form.jpg";
import next from "./static/stack/next.jpg";
import styled from "./static/stack/styled.jpg";
import fontawesome from "./static/stack/fontawesome.jpg";
import antdesign from "./static/stack/antdesign.png";
import npm from "./static/stack/npm.png";
import jses6 from "./static/stack/jses6.jpg";
import sass from "./static/stack/sass.png";
import router from "./static/stack/router.jpg";
import materialui from "./static/stack/materialui.png";
import bootstrap from "./static/stack/bootstrap.png";
import ts from "./static/stack/ts.png";

export interface ISocialMedia {
  href: string;
  icon: IconProp;
  text?: string;
  $size?: string;
}

export const socialData: ISocialMedia[] = [
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/alexander-socolov-528426213/",
    text: "Linked In",
  },
  {
    icon: faInstagram,
    href: "https://instagram.com/sokol__dev",
    text: "Instagram",
  },
  { icon: faTelegramPlane, href: "https://t.me/sokol_dev", text: "Telegram" },
  { icon: faVk, href: "https://vk.com/sokol__dev", text: "Vkontakte" },
];

export const contactsData: ISocialMedia[] = [
  {
    icon: faPhone,
    href: "tel: +37377534346",
    text: "+37377534346",
  },
  {
    icon: faEnvelopeOpen,
    href: "mailto:http://speedo210@gmail.com",
    text: "speedo210@gmail.com",
  },
];

export const workData = [
  {
    link: "/",
    git: "https://github.com/assassin0210/waxon",
    src: waxon,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/teslaProject",
    src: tesla,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/music",
    src: music,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/pizzza",
    src: pizza,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/basketball",
    src: basketboll,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/summary",
    src: summary,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/table-info",
    src: game,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/registration",
    src: registration,
  },
  {
    link: "/",
    git: "https://github.com/assassin0210/registration",
    src: portfolio,
  },
];

export const stackData = [
  {
    src: webstorm,
    name: "WebStorm",
    link: "https://www.jetbrains.com/webstorm/",
  },
  {
    src: react,
    name: "React",
    link: "https://reactjs.org/",
  },

  {
    src: github,
    name: "GitHub",
    link: "https://github.com/assassin0210",
  },
  {
    src: redux,
    name: "Redux,Redux-Toolkit",
    link: "https://redux-toolkit.js.org/",
  },
  {
    src: ts,
    name: "TypeScript",
    link: "https://redux-toolkit.js.org/",
  },

  {
    src: html,
    name: "HTML5",
    link: "https://html.com/",
  },
  {
    src: reatom,
    name: "Reatom",
    link: "https://reatom.js.org/#/",
  },

  {
    src: hookForm,
    name: "React Hook Form",
    link: "https://react-hook-form.com/",
  },
  { src: next, name: "NextJs", link: "" },
  {
    src: styled,
    name: "Styled Components",
    link: "https://styled-components.com/",
  },
  {
    src: fontawesome,
    name: "Font Awesome",
    link: "https://fontawesome.com/",
  },
  {
    src: bootstrap,
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    src: antdesign,
    name: "Ant Design",
    link: "https://ant.design/",
  },
  {
    src: npm,
    name: "NPM",
    link: "https://www.npmjs.com/",
  },

  {
    src: jses6,
    name: "JavaScript ES6",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },

  {
    src: sass,
    name: "Sass",
    link: "https://sass-lang.com/",
  },
  {
    src: router,
    name: "React Router Dom v6",
    link: "https://reactrouter.com/",
  },
  {
    src: materialui,
    name: "Material ui",
    link: "https://mui.com/",
  },
];
export const resumeData = [
  { skill: "HTML/CSS", percent: "70" },
  { skill: "JavaScript", percent: "70" },
  { skill: "React", percent: "80" },
  { skill: "GitHub", percent: "65" },
  { skill: "TypeScript", percent: "80" },
  { skill: "Illustrator/Photoshop", percent: "40" },
];
