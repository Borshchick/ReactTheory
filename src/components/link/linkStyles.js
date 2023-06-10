import { NavLink } from "react-router-dom";
import { css, styled } from "styled-components";

export const Link = styled.div`
  padding: 50px;
  list-style-type: none;
  padding-left: 40px;
  transition: all .3s;
  &:hover{
    font-size: 22px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 155px;
`;

export const NavWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const LinkStyles = styled(NavLink)`
  text-decoration: none;
  color: black;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 1.5px;
    background-color: black;
    transition: width 0.35s;

    &:hover {
      width: 100%;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      color: gold;
      font-size: 22px;
      transition: 0.3s;
      text-decoration: none;
      display: flex;
    `}
`;
