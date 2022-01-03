import { FC, useCallback, useState } from "react";
import styled from "styled-components";
import { AboutMeItemSkeleton } from "../skeletons/AboutMeItemSkeleton";

export const StackItem: FC<{ name: string; src: string; link: string }> = ({
  src,
  name,
  link,
}) => {
  const [test, setTest] = useState(false);

  const loaded = useCallback(() => {
    setTest(true);
  }, []);
  return (
    <>
      <Wrapper onLoad={loaded} target={"_blank"} href={link}>
        <StackImg loaded={test} src={src} alt={name} />
        {!test && <AboutMeItemSkeleton />}
        {test && <p>{name}</p>}
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
`;
