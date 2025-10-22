import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Nav, StyledNavLink } from "./Layout.styled";

const PageLayout = () => {
  const [activeItem, setActiveItem] = useState(1);

  const items = [
    { id: 1, page: "Home page", to: "/" },
    { id: 2, page: "Movies collection", to: "/movies" },
  ]
    .map(({ page, to, id }) => (
      <StyledNavLink
        to={to}
        // className={`${activeItem === id ? "active" : ""}`}
        onClick={() => setActiveItem(id)}
        active={`${activeItem === id}`}
      >
        {page}
      </StyledNavLink>
    ))
    .map((item, index) => ({
      key: index,
      label: item,
    }));
  console.log(activeItem);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
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
        <Breadcrumb style={{ margin: "16px 0" }} />
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
      <Footer style={{ textAlign: "center", marginTop: "auto" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default PageLayout;
