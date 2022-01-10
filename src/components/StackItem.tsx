import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { AboutMeItemSkeleton } from "../skeletons/AboutMeItemSkeleton";
import { media } from "../styled/media";

export const StackItem: FC<{ name: string; src: string; link: string }> = ({
  src,
  name,
  link,
}) => {
  const [status, setStatus] = useState(false);

  const loaded = useCallback(() => {
    setStatus(true);
  }, []);
  return (
    <>
      <Wrapper onLoad={loaded} target={"_blank"} href={link}>
        <StackImg loaded={status} src={src} alt={name} />
        {!status && <AboutMeItemSkeleton />}
        {status && <p>{name}</p>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StackImg = styled.img<{ loaded: boolean }>`
  display: ${({ loaded }) => (loaded ? "block" : "none")};
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 5px;
  border-radius: 12px;
  margin: 10px;
  width: 110px;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }

  transition: all 0.2s ease-in-out;

  ${media.desktopBefore} {
    width: 90px;
  }

  ${media.mobileBefore} {
    width: 70px;
  }
`;
