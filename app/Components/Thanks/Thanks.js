import React from "react";
import "../../globals.css";
import style from "./Thanks.module.scss";
import Link from "next/link";

export default function Thanks() {
  return (
    <div className={`${style.thanks} container`}>
      <div className={style.thanks__box}>
        <i className="fa-solid fa-check"></i>
      </div>
      <div className={style.thanks__msg}>
        <h2>Thank you for contacting us.</h2>
        <p>You are very important to us, and all information received will always remain confidential. We will contact you as soon as we review your message.</p>
      </div>
      
        <Link className={`${style.thanks__link} button`} href="/">
          Go to Homepage
        </Link>
     
    </div>
  );
}
