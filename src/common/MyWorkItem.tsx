import styled from "styled-components";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { HoverSection, Links, Wrapper } from "../styled/common";
import { SocialMedia } from "./SocialMedia";
import { useCallback, useState } from "react";
import { AboutMeItemSkeleton } from "../skeletons/MyWorkItemSkeleton";

interface IProp {
  link: string;
  src: string;
  git: string;
}

export const MyWorkItem = ({ src, git, link }: IProp) => {
  const [status, setStatus] = useState(false);
  console.log(status);

  const loaded = useCallback(() => {
    setStatus(true);
  }, []);
  return (
    <ItemWrapper>
      <Wrapper onLoad={loaded} src={src}>
        <Image src={src} alt="" />
        <HoverSection>
          <SocialMedia $size={"60px"} icon={faGithubSquare} href={git} />
          <SocialMedia $size={"60px"} icon={faLink} href={link} />
        </HoverSection>
        <Links />
        {!status && <AboutMeItemSkeleton />}
      </Wrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  gap: 10px;
`;

const Image = styled.img`
  width: 260px;
  //object-fit: cover;
  position: absolute;
  z-index: 1;
`;
