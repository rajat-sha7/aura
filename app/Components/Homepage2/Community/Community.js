import React from "react";
import style from "./Community.module.css";
import Cards from "../Community/CommunityCards/Cards"
import Link from "next/link";
import "../../../globals.css";

const Community = () => {
  return (
    <div className={`${style.main_container} `}>
      <div className="container">
        <div className={`${style.community_section}`}>
          <Cards/>
            <Link className={`${style.community_link} button`} href="/blog"> View all</Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
