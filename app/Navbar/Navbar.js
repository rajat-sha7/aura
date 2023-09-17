import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/aura_logo.png";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Navbar = () => {
  const currentRoute = usePathname();
  const Router = useRouter();
  const [menu, setMenu] = useState(false);
  const [isactive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    if (!menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleClick = () => {
    setIsActive(!isactive);
    document.body.style.overflow = "scroll";
  };

  const handleBtn = (e) => {
    const TargetID = e.target.getAttribute("href").slice(1);
    e.preventDefault();
    const { pathname } = Router;
    setMenu(false);
    setIsActive(!isactive);
    document.body.style.overflow = "scroll";
    if (pathname == "/") {
      const otherPageComponent = document.getElementById(TargetID);
      otherPageComponent?.scrollIntoView({
        block: "start",
        inline: "center",
      });
    } else {
      Router.push("/");
      setTimeout(() => {
        const otherPageComponent = document.getElementById(TargetID);
        otherPageComponent?.scrollIntoView({
          block: "start",
          inline: "center",
        });
        // window.scroll(0,7700)
      }, 500);
    }
  };

  return (
    <div id="nav" className={`${style.navbar} container`}>
      <div className={style.navbar_logo}>
        <Link className={style.spanlogo} href="/">
        Aura
          {/* <Image
            src={Logo}
            width={100}
            height={50}
            alt="Aura Logo"
            style={{ objectFit: "contain" }}
            className={style.logoImage1}

          /> */}
        </Link>
      </div>

      <div className={`${style.right_nav} ${menu ? style.active : ""}`}>
        <div className={`${style.nav_lists} ${menu ? style.menulists : ""}`}>
          <ul className={`${style.nav_list} ${menu ? style.menulist : ""}`}>
            <li
              onClick={handleClick}
              className={`${style.li_section} ${
                currentRoute === "/" ? style.active_link : ""
              }`}
            >
              <Link className={style.nav_links} href="/">
                Home
              </Link>
            </li>
            <li
              onClick={handleClick}
              className={`${style.li_section} ${
                currentRoute === "/about" ? style.active_link : ""
              }`}
            >
              <Link className={style.nav_links} href="/about">
                About
              </Link>
            </li>

            <li
              onClick={handleClick}
              className={`${style.li_section} ${
                currentRoute === "/portfolio" ? style.active_link : ""
              }`}
            >
              <Link className={style.nav_links} href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li
              onClick={handleClick}
              className={`${style.li_section} ${
                currentRoute === "/blog" ? style.active_link : ""
              }`}
            >
              <Link className={style.nav_links} href="/blog">
                Blog
              </Link>
            </li>

            <li
              onClick={handleClick}
              className={`${style.li_section} ${
                currentRoute === "/contact" ? style.active_link : ""
              }`}
            >
              <Link className={style.nav_links} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span
            onClick={handleBtn}
            href="#call"
            className={`${style.nav_btn} button`}
          >
            Talk to us
          </span>
        </div>
      </div>
      <div className={style.menubar} onClick={toggleMenu}>
        {!menu ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-regular fa-x"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
