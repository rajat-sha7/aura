"use client";
import React, { useState } from "react";
import style from "./Work.module.css";
import ImageSlider from "./ImageSlider";
import "../../../globals.css";
import Link from "next/link";
import "./work.scss";

const Work = () => {

  const sliders = [
    {
      label: "application",
      data: [
        {
          slideimg: "/sliderimg/legal.png",
          title: "National Legal Aid",
          desc: " Aura provided support to a large and complex project to simplify legal information across all states and   ...",
          button: {
            title: "Read more",
            link: "https://familyviolencelaw.gov.au/",
          },
        },
        {
          slideimg: "/sliderimg/portfolio1.png",
          title: "Resolution Pathways",
          desc: "Aura provided web development and project design services to Resolution Pathways to augment their capacity...",
          button: {
            title: "Read more",
            link: "https://resolutionpathways.com.au/",
          },
        },
        {
          slideimg: "/portfolio2.png",
          title: "Resolve Advisors",
          desc: "We provide technology consultation and support to Resolve Advisors to build.",
          button: {
            title: "Read more",
            link: "https://resolveadvisors.com.au/",
          },
        },
        {
          slideimg: "/sliderimg/portfolio4.png",
          title: "Accessible CMS",
          desc: " We created a cutting-edge content management system...",
          button: {
            title: "Read more",
            link: "https://accessiblecms.com.au/",
          },
        },
        {
          slideimg:  "/portfolio3.png",
          title: "yoga-vastu",
          desc: " The world's leading Iyengar yoga video service. Built to connect a international ...",
          button: {
            title: "Read more",
            link: "https://yogavastu.com/",
          },
        },
      ],
    },
    {
      label: "mobileApp",
      data: [
        {
          slideimg: "/portfolio5.png",
          title: "Blaqbox",
          desc: "A tool for tracking cryptocurrency news, calendar events and price movements...",
          button: {
            title: "Read more",
            link: "https://blaqbox.io/",
          },
        },
        {
          slideimg: "/portfolio3.png",
          title: "Yoga Vastu",
          desc: "The world's leading Iyengar yoga video service. Built to connect a international group of experie...",
          button: {
            title: "Read more",
            link: "https://yogavastu.com/",
          },
        },
        {
          slideimg:  "/elker.png",
          title: "Elker",
          desc: "Elker is an encrypted reporting and feedback tool which helps employees get support without risk...",
          button: {
            title: "Read more",
            link: "https://elker.com/",
          },
        },
        {
          slideimg:  "/women-legal.jpg",
          title: "Womens Legal Service",
          desc: "Aura developers built a directory of all resources for domestic violence services throughout Australia...",
          button: {
            title: "Read more",
            link: "https://www.wlsnsw.org.au/",
          },
        },
        
      ],
    },
    {
      label: "website",
      data: [
        {
          slideimg: "/women-legal.jpg",
          title: "Womens Legal Service",
          desc: "Aura developers built a directory of all resources for domestic violence services throu...",
          button: {
            title: "Read more",
            link: "https://www.wlsnsw.org.au/",
          },
        },
        {
          slideimg: "/sliderimg/legal.png",
          title: "National Legal Aid",
          desc: "odacora provided support to a large and complex project to simplify legal information acros...",
          button: {
            title: "Read more",
            link: "https://familyviolencelaw.gov.au/",
          },
        },
        {
          slideimg: "/opanimg.png",
          title: "OPAN",
          desc: " We help you understand and exercise your rights, access aged care services...",
          button: {
            title: "Read more",
            link: "https://opan.org.au/",
          },
        },
        {
          slideimg: "/sliderimg/era.jpg",
          title: "ERA",
          desc: "Rights Advocacy has promoted the human rights of all older Victorians...",
          button: {
            title: "Read more",
            link: "https://elderrights.org.au/",
          },
        },
        {
          slideimg: "/sliderimg/hfof.png",
          title: "HFOF",
          desc: "Food and beverage solutions driven by data, informed by insight, underpinned.",
          button: {
            title: "Read more",
            link: "https://www.headfulloffood.com/",
          },
        },
      ],
    },
    {
      label: "sass",
      data: [
        {
          slideimg: "/sliderimg/era.jpg",
          title: "ERA",
          desc: "Rights Advocacy has promoted the human rights of all older Victorians...",
          button: {
            title: "Read more",
            link: "https://elderrights.org.au/",
          },
        },
        {
          slideimg: "/sliderimg/hfof.png",
          title: "HFOF",
          desc: "Food and beverage solutions driven by data, informed by insight, underpinned.",
          button: {
            title: "Read more",
            link: "https://www.headfulloffood.com/",
          },
        },
        {
          slideimg: "/sliderimg/portfolio1.png",
          title: "Resolution Pathways",
          desc: "Aura provided web development and project design services to Resolution Pathways to augment their capacity...",
          button: {
            title: "Read more",
            link: "https://resolutionpathways.com.au/",
          },
        },
        {
          slideimg: "/portfolio2.png",
          title: "Resolve Advisors",
          desc: "We provide technology consultation and support to Resolve Advisors to build.",
          button: {
            title: "Read more",
            link: "https://resolveadvisors.com.au/",
          },
        },
        {
          slideimg: "/women-legal.jpg",
          title: "Womens Legal Service",
          desc: "Aura developers built a directory of all resources for domestic violence services throu...",
          button: {
            title: "Read more",
            link: "https://www.wlsnsw.org.au/",
          },
        },
      ],
    },
  ];
  const [isActive, setIsActive] = useState(1);
  const [sliderdata, setslider] = useState(sliders[0]);

  return (
    <div className={`${style.work_container} containers-fluid`}>
      <div className={`${style.workbox_h1}`}>
        <h2>Our Work</h2>
      </div>

      <div className={`${style.workbox_p}`}>
        <h3>
          We shed a light on our work and what goes behind the development.
        </h3>
      </div>

      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" />
        <label
          onChange={(e) => {
            e.target.checked;
          }}
          onClick={() => {
            setslider(sliders[0]);
            setIsActive(1);
          }}
          className={`${isActive === 1 ? "active" : ""} tab`}
          htmlFor="radio-1"
        >
          Web Application
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label
          onChange={(e) => {
            e.target.checked;
          }}
          onClick={() => {
            setslider(sliders[1]);
            setIsActive(2);
          }}
          className={`${isActive === 2 ? "active" : ""} tab`}
          htmlFor="radio-2"
        >
          Mobile App
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label
          onChange={(e) => {
            e.target.checked;
          }}
          onClick={() => {
            setslider(sliders[2]);
            setIsActive(3);
          }}
          className={`${isActive === 3 ? "active" : ""} tab`}
          htmlFor="radio-3"
        >
          Website
        </label>
        <input type="radio" id="radio-4" name="tabs" />
        <label
          onChange={(e) => {
            e.target.checked;
          }}
          onClick={() => {
            setslider(sliders[3]);
            setIsActive(4);
          }}
          className={`${isActive === 4 ? "active" : ""} tab`}
          htmlFor="radio-4"
        >
          Saas
        </label>
        <span className="glider"></span>
      </div>

      <div className={`${style.workslides} containers-fluid`}>
        <ImageSlider sliders={sliderdata} />
      </div>
      <Link href="/portfolio" className={`${style.view_click} button`}>
        View All
      </Link>
    </div>
  );
};

export default Work;
