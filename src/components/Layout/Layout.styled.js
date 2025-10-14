import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  color: darkblue;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  &:hover {
    border-bottom: 1px solid;
  }
`;
