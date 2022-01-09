import { TextWithLine, Title, Text, ScrollSection } from "../styled/common";
import { Map } from "./Map";
import { useTranslate } from "../hooks/translate";
import { contactsData, socialData } from "../const";

import { SocialMedia } from "../common/SocialMedia";
import styled from "styled-components";
import { LayoutContainer } from "../common/Container";
import { media } from "../styled/media";

export const ContactMe = () => {
  const { t } = useTranslate();
  return (
    <LayoutContainer>
      <ScrollSection>
        <Title>{t.contactMe.title}</Title>
        <TextWithLine>{t.contactMe.text}</TextWithLine>
        <Map />
        <Wrapper>
          {contactsData.concat(socialData).map(({ icon, href, text }) => (
            <SocialMedia key={href} icon={icon} href={href}>
              <ContactText> {text}</ContactText>
            </SocialMedia>
          ))}
        </Wrapper>
      </ScrollSection>
    </LayoutContainer>
  );
};

const Wrapper = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  ${media.desktopBefore} {
    grid-template-columns: auto auto;
  }
  ${media.mobileBefore} {
    grid-template-columns: auto;
  }
`;

const ContactText = styled(Text)`
  display: inline;
  padding: 0;
  margin: 0;
`;
