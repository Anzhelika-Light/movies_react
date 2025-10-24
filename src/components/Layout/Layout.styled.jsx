import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: #1677ff;
  }
`;
