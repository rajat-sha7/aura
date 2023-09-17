"use client";
import React from "react";
import style from "./Meating.module.css";
import Link from "next/link";
import "../../../globals.css";
import { InlineWidget } from "react-calendly";

const Meating = () => {
  const calendlyStyles = {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    loader: "none",
  };
  return (
    <div id="call" className={`${style.meeting_section} container`}>
      <div className={style.calender_section}>
        <InlineWidget
          className={style.widget}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "fffff",
            textColor: "000000",
          }}
          styles={calendlyStyles}
          url="https://calendly.com/jasnarula/30min"
        />
      </div>

      {/* ----------------------------description section---------- */}

      <div className={style.description_section}>
        <h2>Talk with Our Expert Consultants</h2>
        <Link href="#">What to expect in the meeting</Link>

        <ol className={style.ordered_list}>
          <li>
            <b>Goal setting : </b>
            <span>
              The first step in a software development consultation call is to
              establish your goals for the project. What are you hoping to
              achieve with your software? Do you have a specific timeline ort
              budget in mind ? What are the key features and functionality you
              would like to include in your software?
            </span>
          </li>
          <li>
            <b>Technical feasibility assessment: </b>
            <span>
              During the consultation call, the development team will assess the
              technical feasibility of your project. They will consider factors
              such as the complexity of the software, the technology stack
              required to build it, and any potential roadblocks that may arise
              during the development process.
            </span>
          </li>
          <li>
            <b>Requirements gathering: </b>
            <span>
              Once the technical feasibility has been established, the
              development team will begin to gather requirements for the
              project. They will work with you to identify the key features and
              functionalities required to meet your business needs.
            </span>
          </li>
          <li>
            <b>Proposal and timeline: </b>
            <span>
              Based on the requirements gathered, the development team will
              provide a proposal for the project, including an estimated
              timeline and budget. They may also provide suggestions for
              additional features or functionalities that could enhance your
              software.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Meating;
