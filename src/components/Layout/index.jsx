import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../index.js"
import "./index.scss"
function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layoutContainer">
        <Navbar />
        <Outlet />
      </div>

    </div>
  )
}

export default Layout