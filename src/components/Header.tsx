"use client"
import React, { useState } from "react";
import { Html5TwoTone, AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from 'next/link';

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: (
      <Link href="/" rel="noopener noreferrer">
        Fakedit
      </Link>
    ),
    icon: <Html5TwoTone />
  },
  {
    key: 'link2',
    label: (
      <Link href="/" rel="noopener noreferrer">
        Home
      </Link>
    ),
    icon: <AppstoreOutlined />
  },
  {
    key: 'link3',
    label: (
      <Link href="/" rel="noopener noreferrer">
        Home
      </Link>
    ),
    icon: <SettingOutlined />,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState("logo");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <header>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </header>
  );
};

export default Header;
