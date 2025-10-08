import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  min-width: 1000px;
  gap: 20px;
  justify-content: center;
  border: 1px solid blue;
  padding: 5px 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: darkblue;
`;
