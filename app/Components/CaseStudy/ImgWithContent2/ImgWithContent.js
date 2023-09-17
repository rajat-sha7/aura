import style from "@/app/Components/CaseStudy/ImgWithContent2/imgwithcontent2.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function ImgWithContent2() {
  return (
    <div id="uxDesign" className="container">
      <div className={`${style.content}`}>
        <div className={style.content__wrap}>
          <div className={style.content__left}>
            <div className={style.content__heading}>
              <h2>A Mobile First App National Legal Aid</h2>
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

          <div className={style.content__img}>
            <LazyLoadImage effect="blur" src="/mobil.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
