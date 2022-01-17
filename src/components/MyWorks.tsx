import { TextWithLine, Title } from "../styled/common";
import { MyWorkItem } from "../common/MyWorkItem";
import styled from "styled-components";
import { useTranslate } from "../hooks/translate";

import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../store/rootReducer";
import { useEffect } from "react";
import { getWorkRequest } from "../store/requests/getWork";
import { AboutMeItemsSkeleton } from "../skeletons/MyWorkItemSkeleton";

export const MyWorks = () => {
  const { t } = useTranslate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkRequest());
  }, [dispatch]);
  const { work, status } = useSelector(
    (state: RootStateType) => state.workData
  );

  return (
    <>
      <Title>{t.myWorks.title}</Title>
      <TextWithLine>{t.myWorks.description}</TextWithLine>
      <Wrapper>
        {status === "loaded" ? (
          work.map((item) => (
            <MyWorkItem
              key={item.src}
              src={item.src}
              link={item.link}
              git={item.git}
            />
          ))
        ) : (
          <AboutMeItemsSkeleton />
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;
