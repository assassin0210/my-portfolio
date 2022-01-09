import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faCloudDownloadAlt,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { CustomLink } from "../common/CustomLink";
import { Checkbox } from "../common/Checkbox";
import { cssGreenHover, Menu } from "../styled/common";

export const LeftMenu = () => {
  return (
    <Menu>
      <div />
      <Checkbox />
      <List>
        <CustomLink to="/">
          <MenuIcon icon={faUser} />
        </CustomLink>
        <CustomLink to="/contacts">
          <MenuIcon icon={faComment} />
        </CustomLink>
        <CustomLink to="/my-works">
          <MenuIcon icon={faGlasses} />
        </CustomLink>
        <CustomLink to="/resume">
          <MenuIcon icon={faBriefcase} />
        </CustomLink>
      </List>
      <div>
        <MenuIcon icon={faCloudDownloadAlt} />
      </div>
    </Menu>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 30px;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: calc(20px + 10 * (100vw / 1700));
  width: 50px;
  color: ${({ theme }) => theme.color.lightGrey};
  ${cssGreenHover}
`;
