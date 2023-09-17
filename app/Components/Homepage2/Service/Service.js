import React, { useState, useRef } from "react";
import style from "./Service.module.css";
import Link from "next/link";
import "../../../globals.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "white",
//     width: "99vw",
//     height: "100vh",
//     filter: "brightness(90%)",
//   },
// };

const Service = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const handlePause = () => {
  //   setModalOpen(false);
  //   document.body.style.overflow = "scroll";
  // };

  // const handleplay = () => {
  //   setModalOpen(true);
  //   document.body.style.overflow = "hidden";
  // };

  return (
    <div className={`${style.service_container} container`}>
      <div className={style.service_h1}>
        <h2>Our Services</h2>
        <h3>
          Services That We Deliver Makes Us Dignified As One of The Top app
          Development Companies
        </h3>
      </div>

      <div className={`${style.ui_services} `}>
        <div className={style.ui_servicesLeft}>
          <h5>UI UX Design</h5>
          <div className={style.ui_serviceslist}>
            <ul>
              <li className="list">User Research</li>
              <li className="list">Information Architecture</li>
              <li className="list">Interaction & Interface Design</li>
              <li className="list">Prototype and testing</li>
            </ul>
          </div>
          <Link href="/service" className={`${style.ui_call} button`}>
            Explore
          </Link>
        </div>
        <div className={style.ui_servicesRight}>
          <LazyLoadImage
            effect="blur"
            src="/service1.png"
            alt="serviceimg1"
            className={style.serviceImgSize1}
          />
          <div />
        </div>
      </div>
      {/* //--------------------------------------------------------------------------- */}

      <div className={`${style.software_services}`}>
        <div className={style.ui_servicesRight}>
          <LazyLoadImage
            effect="blur"
            src="/service2.png"
            alt="serviceimg1"
            className={style.serviceImgSize2}
          />
          <div />
        </div>
        <div className={style.ui_servicesLeft}>
          <h5>App and Web Development</h5>
          <div className={style.ui_serviceslist}>
            <ul>
              <li className="list">Native iOS & Android Apps</li>
              <li className="list">Hybrid & Cross-Platform Apps</li>
              <li className="list">Progress Web Apps</li>
              <li className="list">app Maintenance & Support</li>
            </ul>
          </div>
          <Link href="/service" className={`${style.ui_call} button`}>
            Explore
          </Link>
        </div>
      </div>

      <div className={`${style.ui_services}`}>
        <div className={style.ui_servicesLeft}>
          <h5>Strategy & Consultancy</h5>
          <div className={style.ui_serviceslist}>
            <ul>
              <li className="list">Product Discovery</li>
              <li className="list">Product Strategy & Roadmap</li>
              <li className="list">Digital Marketing & Branding</li>
              <li className="list">Feasibility & Architecture</li>
            </ul>
          </div>
          <Link href="/service" className={`${style.ui_call} button`}>
            Explore
          </Link>
        </div>
        <div className={`${style.ui_servicesRight} ${style.frame_video}`}>
          <LazyLoadImage
            effect="blur"
            src="/service3.png"
            alt="serviceimg1"
            className={style.serviceImgSize3}
          />
          {/* <div className={style.video__playbanner}>
            <LazyLoadImage effect="blur"
              // onClick={handleplay}
              className={style.video_play}
              src="/play.png"
              alt="play"
            />
          </div> */}

          {/* <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={customStyles}
          >
            <div className={style.main_div}>
              <video
                id={style.myvideo}
                className={style.video_block}
                controls
                autoPlay
                src="/servicedummy.mp4"
              ></video>

              <button className={style.video_cut}
               onClick={handlePause}
               >
                <i class="fa-sharp fa-solid fa-xmark"></i>
              </button>
            </div>
          </Modal> */}
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className={`${style.software_services} ${style.padding}`}>
        <div className={style.ui_servicesRight}>
          <LazyLoadImage
            effect="blur"
            src="/service4.png"
            alt="serviceimg1"
            className={style.serviceImgSize4}
          />
          <div />
        </div>
        <div className={`${style.ui_servicesLeft} ${style.padding_in}`}>
          <h5>Growth Strategies</h5>
          <div className={`${style.ui_serviceslist} ${style.growth_text} `}>
            <p>
              Amet minim mollit non deserunt ullamco est sit alique dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <Link
            className={`${style.ui_call} ${style.growth_link} button`}
            href="/service"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
