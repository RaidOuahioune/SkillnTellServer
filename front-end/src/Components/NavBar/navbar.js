import "./navbar.css";
import { Outlet, Link } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { links } from "./links";
import logo from "../../assets/logo.png";
import { NavMobile } from "./mobileNav";
import { DesktopNav } from "./DesktopNav";
export function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return(
    <>
    {width<=768?<NavMobile></NavMobile>:<DesktopNav></DesktopNav>}
    </>
  )
  
}
