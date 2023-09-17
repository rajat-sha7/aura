import style from "@/app/Components/CaseStudy/ImgWithContent3/imgwithcontent3.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function ImgWithContent3() {
  return (
    <div className={`${style.content} container`}>
      <div className={style.content__wrap}>
        <div className={style.content__left}>
          <LazyLoadImage effect="blur" src="/domstic.png" alt="" />
        </div>
        <div className={style.content__right}>
          <div className={style.content__details}>
            <div className={style.content__title}>
              {" "}
              <h2>Domestic and Family Violence</h2>
            </div>
            <div className={style.content__desc}>
              <p>
                Aura provided support to a large and complex project to
                simplify legal information across all states and territories in
                Australia. We work with multiple stakeholders to provide a
                comprehensive information resource around family violence law in
                Australia.
              </p>
              <p>
                Aura provided support to a large and complex project to
                simplify legal information across all states and territories in
                Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
