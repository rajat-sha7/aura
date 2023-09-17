import React, { useState } from "react";
import "../../globals.css";
import PortfolioHero from "./PortfolioHero/PortfolioHero";
import PortfolioButtons from "./PortfolioButtons/PortfolioButtons";
import PortfolioGrid from "./PortfolioGrid/PortfolioGrid";

export default function index({ data }) {
  const [value, setValue] = useState("All");
  return (
    <>
      <div>
        <PortfolioHero />
        <PortfolioButtons setValue={setValue}/>
        <PortfolioGrid category={value} data={data} />
      </div>
    </>
  );
}
