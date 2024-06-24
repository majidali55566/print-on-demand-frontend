import SideBar from "./SideBar.jsx";
import NavBar from "./NavBar.jsx";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <header>
        <NavBar />
      </header>
      <SideBar />
      <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
    </div>
  );
};

export default Layout;
