"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaHome, FaUser, FaProductHunt } from "react-icons/fa";
// import Link from "next/link";

const SideBar = () => {
  return (
    <Sidebar>
      <Menu iconShape="circle">
        <MenuItem icon={<FaHome />}> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
