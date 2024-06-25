"use client";
import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";
import { useState } from "react";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(true);

  const users = [
    {
      name: "Majid Ali",
      role: "seller",
    },
    ,
  ];

  return (
    <div style={{ display: "flex" }}>
      <header>
        {users.role === "seller" && <h1>Seller navBar</h1>}
        {users.role === "usual" && <NavBar />}
      </header>
      {users[0].role === "seller" && <SideBar users={users} />}
      <main style={{ flexGrow: 1 }}>{children}</main>
    </div>
  );
};

export default Layout;
