import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faLinkedinIn,
  faTelegramPlane,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export interface ISocialMedia {
  href: string;
  icon: IconProp;
  text?: string;
  $size?: string;
}

export const socialData: ISocialMedia[] = [
  {
    icon: faLinkedinIn as IconProp,
    href: "https://www.linkedin.com/in/alexander-socolov-528426213/",
    text: "Linked In",
  },
  {
    icon: faInstagram as IconProp,
    href: "https://instagram.com/sokol__dev",
    text: "Instagram",
  },
  {
    icon: faTelegramPlane as IconProp,
    href: "https://t.me/sokol_dev",
    text: "Telegram",
  },
  {
    icon: faVk as IconProp,
    href: "https://vk.com/sokol__dev",
    text: "Vkontakte",
  },
];

export const contactsData: ISocialMedia[] = [
  {
    icon: faPhone as IconProp,
    href: "tel: +37377534346",
    text: "+37377534346",
  },
  {
    icon: faEnvelopeOpen as IconProp,
    href: "mailto:http://speedo210@gmail.com",
    text: "speedo210@gmail.com",
  },
];
