import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home page</NavLink>
        <NavLink to="/movies">Movies collection</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
