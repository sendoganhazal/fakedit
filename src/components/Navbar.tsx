'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: (
      <Link href="/" rel="noopener noreferrer">
        Home
      </Link>
    ),
    icon: <MailOutlined />,
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

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('home');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      mode="inline"
      onClick={onClick}
      items={items}
      defaultSelectedKeys={['1']}
      selectedKeys={[current]}
    />
  );
};

export default Navbar;