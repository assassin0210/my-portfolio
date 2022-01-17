import styled from "styled-components";
import { Skeleton } from "../styled/common";
import { media } from "../styled/media";

export const AboutMeItemSkeleton = () => {
  return (
    <Wrapper>
      <Icon />
      <Text />
    </Wrapper>
  );
};
export const AboutMeItemsSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <Wrapper key={index}>
          <Icon />
          <Text />
        </Wrapper>
      ))}
    </>
  );
};
const Icon = styled(Skeleton)`
  width: 110px;
  height: 110px;
  padding: 5px;
  border-radius: 12px;
  margin: 10px;
  ${media.desktopBefore} {
    width: 90px;
    height: 90px;
  }
  ${media.mobileBefore} {
    width: 70px;
    height: 70px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const Text = styled(Skeleton)`
  width: 100%;
  height: 25px;
  max-width: 130px;

  ${media.laptopBefore} {
    width: 100%;
  }
`;
