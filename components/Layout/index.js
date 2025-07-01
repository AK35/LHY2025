"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
const { Header, Content, Footer, Sider } = Layout;
import styles from "./index.module.css";

export const metadata = {
  title: "App",
  description: "next app",
};

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}
const items = [getItem("温度传感器", "1"), getItem("智能阀门", "2")];

export default ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyleProvider layer>
      <ConfigProvider theme={{}}>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <div className={styles.logo}>
              <h2>阿斯曼云平台</h2>
            </div>
            <div className={styles.title}>
              <div className={styles.project}>
                <h2>中储粮北京项目</h2>
                <li className={styles.separator}>/</li>
                <li className={styles.link}>一期项目</li>
              </div>
            </div>
          </Header>

          <Layout>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
              />
            </Sider>
            <Layout>
              <Content className={styles.content}>{children}</Content>
              <Footer className={styles.footer}>阿斯曼云平台</Footer>
            </Layout>
          </Layout>
        </Layout>
      </ConfigProvider>
    </StyleProvider>
  );
};
