import style from "@/app/Components/CaseStudy/Feedback/feedback.module.scss";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Feedback() {
  return (
    <div id="web" className="container">
      <div className={style.feedback}>
        <div className={style.feedback__title}>
          <h2> Client Feedback</h2>
        </div>
        <div className={style.feedback__client}>
          <div className={style.feedback__left}>
            <LazyLoadImage effect="blur" src="/profile.svg" alt="" />
          </div>
          <div className={style.feedback__right}>
            <div className={style.feedback__client__desc}>
              <p>
                “Great partnerships are built on great relationships and company
                name have worked to build those strong bonds at all levels with
                our team at Michael Hill. Taking the time to learn our business,
                and develop ways of working that are right for us, has been a
                key factor in delivering our project goals.”
              </p>
            </div>
            <div className={style.feedback__client__name}>
              <h6>Olivia</h6>
            </div>
          </div>
        </div>

        <div className={style.feedback__banner}>
          <LazyLoadImage effect="blur" src="/familyvoilence.png" alt="" />
        </div>
        {/* <div className={style.feedback__subheading}>
          <h2>Creating Next Level Website</h2>
        </div> */}

        {/* <div className={style.feedback__desc}>
          <p>
            Aura provided support to a large and complex project to simplify
            legal information across all states and territories in Australia. We
            work with multiple stakeholders to provide a comprehensive
            information resource around family violence law in Australia.
          </p>
          <p>
            Aura provided support to a large and complex project to simplify
            legal information across all states and territories in Australia. We
            work with multiple stakeholders to provide a comprehensive
            information resource around family violence law in Australia.
            Aura provided support to a large and complex project to simplify
            legal information across all states and territories in Australia. We
            work with multiple stakeholders to provide a comprehensive
            information resource around family violence law in Australia.
          </p>
        </div> */}

        {/* <div className={style.feedback__detail}>
          <span>Get in Touch</span>{" "}
        </div> */}
        {/* <div className={style.feedback__quate}>
          {" "}
          <h6>
            Interested in learning more about our work with Family Violence Law
            Help or any other projects?
          </h6>
        </div> */}
        {/* <span className={style.link_box}>
          <div className={style.feedback__link}>
            <Link href="#">Let’s create something together</Link>
          </div>
          <i
            style={{ color: "var(--bg-primary)" }}
            class="fa-solid fa-arrow-right"
          ></i>
        </span> */}
      </div>
    </div>
  );
}
