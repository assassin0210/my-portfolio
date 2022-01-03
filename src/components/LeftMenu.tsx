import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faCloudDownloadAlt,
  faGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { CustomLink } from "../common/CustomLink";
import { Caret } from "../common/Caret";
import { Checkbox } from "../common/Checkbox";
import { cssGreenHover } from "../styled/common";

export const LeftMenu = () => {
  return (
    <Menu>
      <Caret />
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

const Menu = styled.div`
  padding-bottom: 30px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgb(28, 29, 31);
  background: linear-gradient(
    90deg,
    rgba(28, 29, 31, 1) 0%,
    rgba(9, 8, 8, 1) 100%
  );
  width: 100px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 50px;
`;

const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  width: 50px;
  color: ${({ theme }) => theme.color.lightGrey};
  cursor: pointer;
  ${cssGreenHover}
`;
