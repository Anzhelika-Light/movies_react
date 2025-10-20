import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { NavLink } from "react-router-dom";
import { Nav, StyledNavLink } from "./Layout.styled";

const items = [
  { page: "Home page", to: "/" },
  { page: "Movies collection", to: "/movies" },
]
  .map(({ page, to }) => <NavLink to={to}>{page}</NavLink>)
  .map((item, index) => ({
    key: index,
    label: item,
  }));

const PageLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          // items={[{ title: "Home" }, { title: "List" }, { title: "PageLayout" }]}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

// const Layout = () => {
//   return (
//     <div>
//       <header>
//         <Nav>
//           <StyledNavLink to="/">Home page</StyledNavLink>
//           <StyledNavLink to="/movies">Movies collection</StyledNavLink>
//         </Nav>
//       </header>
//       <main>
// <Suspense fallback={<div>Loading...</div>}>
//   <Outlet />
// </Suspense>
//       </main>
//     </div>
//   );
// };

// export default Layout;
export default PageLayout;
