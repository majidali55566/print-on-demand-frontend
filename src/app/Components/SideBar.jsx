"use client";
import Image from "next/image";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useState } from "react";
import Link from "next/link";
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuItemClick = (item) => {
    setSelected(item);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      rootStyles={{
        backgroundColor: "hsl(184, 50%, 55%)",
      }}
    >
      <div className="user-name">
        <Image
          onClick={() => setCollapsed(!collapsed)}
          src="/flags/humburger.svg"
          width={32}
          height={32}
        ></Image>
        <p className="fw-medium fs-600">Majid</p>
      </div>
      <Menu iconShape="circle">
        <MenuItem
          rootStyles={{
            color: "black",
          }}
          icon={
            <Image src="/flags/template.svg" width={25} height={25}></Image>
          }
          component={<Link href="/seller-pages/template" />}
        >
          Template
          <Image src="/flags/arrow-next.svg" width={16} height={16}></Image>
        </MenuItem>
        <MenuItem
          icon={
            <Image src="/flags/dashboard.svg" width={25} height={25}></Image>
          }
          component={<Link href="/seller-pages/dashboard" passHref />}
        >
          Dashboard
          <Image src="/flags/arrow-next.svg" width={16} height={16}></Image>
        </MenuItem>
        <MenuItem>
          Orders
          <Image src="/flags/arrow-next.svg" width={16} height={16}></Image>
        </MenuItem>
        <MenuItem>
          Calendar
          <Image src="/flags/arrow-next.svg" width={16} height={16}></Image>
        </MenuItem>
        <MenuItem> Calendar </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
