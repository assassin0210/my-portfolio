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
import { media } from "../styled/media";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.darkGrey};
  width: 80px;
  position: relative;
  left: 0;
  ${media.extraDesktopBefore} {
    padding-bottom: 60px;
    margin: 60px 0;
  }
  ${media.laptopBefore} {
    margin: 0;
  }
  ${media.laptop} {
    background: linear-gradient(
      90deg,
      rgba(28, 29, 31, 1) 0%,
      rgba(9, 8, 8, 1) 100%
    );
  }
`;

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
