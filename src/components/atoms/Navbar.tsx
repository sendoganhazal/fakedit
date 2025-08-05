'use client'
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

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
    key: 'topics',
    label: (
      <Link href="/topics" rel="noopener noreferrer">
        Topics
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
   <aside className={styles.navbar}>
     <Menu
      theme="dark"
      mode="inline"
      onClick={onClick}
      items={items}
      defaultSelectedKeys={['1']}
      selectedKeys={[current]}
      style={{height:"100%"}}
    />
   </aside>
  );
};

export default Navbar;