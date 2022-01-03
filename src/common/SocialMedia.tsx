import { FC } from "react";
import { cssGreenHover, SocialIcon } from "../styled/common";
import { ISocialMedia } from "../const";
import styled from "styled-components";

export const SocialMedia: FC<ISocialMedia> = ({ icon, href, children }) => {
  return (
    <Wrapper target={"_blank"} href={href} rel="noreferrer">
      <SocialIcon icon={icon} />
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  ${cssGreenHover};
`;
