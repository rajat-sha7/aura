import React, { useRef, useState } from "react";
import "../../../globals.css";
import style from "./WhatweDo.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function WhatweDo() {
  const [toggle, setToggle] = useState(false);
  // const videoreff = useRef();

  // const handlePlay = () => {
  //   videoreff.current.play();
  //   setToggle(!toggle);
  // };

  // const handlePause = () => {
  //   videoreff.current.pause();
  //   setToggle(!toggle);
  // };
  return (
    <div className={`${style.what_section}`}>
      <div className={`${style.what_box} container`}>
        <div className={style.text__section}>
          <h2>What We Do?</h2>
          <div className={style.whatwedo_list}>
            <ul>
              <li className="list">Web development</li>
              <li className="list">Reasearch and insight</li>
              <li className="list">Project management</li>
              <li className="list">Conversion Rate Optimization</li>
              <li className="list">System Architecture</li>
              <li className="list">Analytics</li>
              <li className="list">Legal strategy</li>
            </ul>
            <ul>
              <li className="list">UX/UI Design</li>
              <li className="list">Digital Strategy</li>
              <li className="list">Interactive Design</li>
              <li className="list">Visual Identity</li>
              <li className="list">Art Direction</li>
              <li className="list">Social Media</li>
              <li className="list">Legal Contracts</li>
            </ul>
          </div>
        </div>

        <div className={style.video__box}>
          <LazyLoadImage effect="blur" src="./aboutimages/aboutt2.png" />
          {/* <video
            id={style.myvideo}
            className={style.main__img}
            style={{ borderRadius: "20px", objectFit: "cover" }}
            width="100%"
            height="100%"
            src="/dummy.mp4"
            ref={videoreff}
            onClick={handlePause}
            onEnded={() => {
              setToggle(false);
            }}
          ></video> */}
          {/* {!toggle ? (
            <div className={style.image_back}>
              <div className={style.button__div}>
                <img
                  onClick={handlePlay}
                  className={style.video_play}
                  src="/play.png"
                  alt="play"
                />
              </div>
            </div>
          ) : (
            ""
          )} */}

          <div
            className={`${style.strategy} ${toggle ? style.hide_section : " "}`}
          >
            <LazyLoadImage effect="blur" src="/whatimg2.png" alt="whatimg2" />
            <span>Digital Strategy</span>
          </div>
          <div
            className={`${style.manage} 
            ${toggle ? style.hide_section : " "}
            `}
          >
            <LazyLoadImage effect="blur" src="/whatimg3.png" alt="whatim3" />
            <span>Project Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}
