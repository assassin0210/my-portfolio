import styled from "styled-components";
import { ImageWrapper } from "../styled/common";

export const Avatar = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const logo = require("../static/main.jpg");
  return (
    <ImageWrapper>
      <Image src={logo} alt="avatar" />
    </ImageWrapper>
  );
};

const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;
