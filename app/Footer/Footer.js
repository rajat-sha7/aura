import React from "react";
import style from "./Footer.module.scss";
import Link from "next/link";
import "../globals.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  const handleTop=()=>{
  window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <div className={`${style.footer__main}`}>
      <div className={`${style.footer} container`}>
        <div className={style.footer__sec}>
        <button  onClick={handleTop}  className={style.top_click}><i className="fa-solid fa-arrow-down-long"></i></button>
          <div className={style.footer__wrap}>
            <div className={style.footer__wrap__content}>
              <div className={style.footer__logo}>
                <img
                  src="/Aura_logo.png"
                  alt="logo"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={style.footer__desc}>
                <p>
                  Aura was designed to bridge a language divide that exists
                  between the world of business leaders, educators, founders,
                  designers and lawyers.
                </p>
              </div>

              
            </div>

            <div className={style.footer__menu}>
              <div className={style.footer__menu__title}>
                <span>Quick Links</span>
              </div>
              <div className={style.footer__menu__wrap}>
                <Link className={style.footer__menu__item} href="/">
                  Home
                </Link>
                <Link className={style.footer__menu__item} href="/about">
                  About
                </Link>
                <Link className={style.footer__menu__item} href="/portfolio">
                  Portfolio
                </Link>
                <Link className={style.footer__menu__item} href="/contact">
                  Contact
                </Link>
                <Link className={style.footer__menu__item} href="blog">
                  Blog
                </Link>
              </div>
            </div>
            <div className={style.footer__menu}>
              <div className={style.footer__menu__title}>
                <span>Services</span>
              </div>
              <div className={style.footer__menu__wrap}>
                <Link className={style.footer__menu__item} href="/service">
                  App Development
                </Link>

                <Link className={style.footer__menu__item} href="/service">
                  Web Development
                </Link>

                <Link className={style.footer__menu__item} href="/service">
                  Product Design
                </Link>

                <Link className={style.footer__menu__item} href="/service">
                  UI/UX Design
                </Link>

                <Link className={style.footer__menu__item} href="/service">
                  Growth Strategy
                </Link>
              </div>
            </div>

            <div className={style.footer__menu}>
              <div className={style.footer__menu__title}>
                <span>Get Help</span>
              </div>
              <div className={style.footer__menu__wrap}>
                <Link className={style.footer__menu__item} href="#">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer__copyright__wrap}>
          <div className={style.footer__copyright}>
            <div className={style.footer__copyright__text}>
              <h6>@Copyright {year} Aura.com</h6>
            </div>

            <div className={style.footer__copyright__menu__wrap}>
              <ul className={style.footer__copyright__menu}>
                <li className={style.lower__links}>
                  <Link
                    className={style.footer__copyright__menu__item}
                    href="/policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className={style.lower__links}>
                  <Link
                    className={style.footer__copyright__menu__item}
                    href="#"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
