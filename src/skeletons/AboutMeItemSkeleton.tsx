import styled from "styled-components";
import { Skeleton } from "../styled/common";

export const AboutMeItemSkeleton = () => {
  return (
    <>
      <Icon />
      <Text />
    </>
  );
};
const Icon = styled(Skeleton)`
  width: 110px;
  height: 110px;
  padding: 5px;
  border-radius: 12px;
  margin: 10px;
`;

const Text = styled(Skeleton)`
  width: 110px;
  height: 25px;
`;
