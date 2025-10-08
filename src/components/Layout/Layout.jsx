import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, StyledNavLink } from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <header>
        <Nav>
          <StyledNavLink to="/">Home page</StyledNavLink>
          <StyledNavLink to="/movies">Movies collection</StyledNavLink>
        </Nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
