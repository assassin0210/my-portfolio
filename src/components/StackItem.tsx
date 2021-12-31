import { FC } from "react";
import styled from "styled-components";

export const StackItem: FC<{ name: string; src: string; link: string }> = ({
  src,
  name,
  link,
}) => {
  return (
    <Wrapper target={"_blank"} href={link}>
      <StackImg src={src} alt={name} />
      <p>{name}</p>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StackImg = styled.img`
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
