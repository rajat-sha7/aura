import React from "react";
import style from "./Numbers.module.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const CounterBox = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container">
      <div className={`${style.CounterBox}`}>
        <ScrollTrigger
          onEnter={() => {
            setCounterOn(true);
          }}
          // onExit={() => {
          //   setCounterOn(false);
          // }}
        >
          <h2>Number speaks louder than words</h2>
          <div className={style.counterRow}>
            <div className={style.counterCell}>
              <h2>
                {" "}
                {counterOn && (
                  <CountUp start={-18} end={12} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>Years of Experience</p>
            </div>

            <div className={style.counterCell}>
              <h2>
                {counterOn && (
                  <CountUp start={220} end={250} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>Development Staff</p>
            </div>
            <div className={style.counterCell}>
              <h2>
                {counterOn && (
                  <CountUp start={65} end={95} duration={2} delay={0} />
                )}
                %
              </h2>
              <p>Client Rentention Rate</p>
            </div>
          </div>
          <div className={style.counterRow}>
            <div className={style.counterCell}>
              <h2>
                {counterOn && (
                  <CountUp start={20} end={50} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>Top Development & B2B provider awards</p>
            </div>

            <div className={style.counterCell}>
              <h2>
                {counterOn && (
                  <CountUp start={-10} end={20} duration={2} delay={0} />
                )}
                +
              </h2>
              <p>Industries</p>
            </div>
            <div className={style.counterCell}>
              <h2>
                $
                {counterOn && (
                  <CountUp start={-10} end={20} duration={2} delay={0} />
                )}
                + Million
              </h2>
              <p>Funding raised through Product We designed</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default CounterBox;
