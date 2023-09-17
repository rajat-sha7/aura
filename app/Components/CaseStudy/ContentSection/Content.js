import style from "@/app/Components/CaseStudy/ContentSection/content.module.scss";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ContentSection({ data }) {
  return (
    <div className="content">
      <div className={style.content__banner}>
        <img loading="lazy" src={data?.banner?.image} alt="" />
      </div>
      <div className={`${style.content__wrap} container`}>
        <div className={style.content__s}>
          <div className={style.content__img}>
            <LazyLoadImage
              effect="blur"
              src={data.content.image.img}
              alt={data?.content.image.alt}
            />
          </div>
          <div className={style.content__sec}>
            <p className={style.content__title}> {data?.content?.title}</p>
            <p className={style.content__desc}> {data?.content?.desc} </p>
          </div>

          <div className={style.content__sec}>
            <p className={style.content__title}>{data?.content?.title2}</p>
            <Link className={style.content__desc} href={data?.content.link.url}>
              {data?.content?.link?.title}
            </Link>
          </div>
        </div>

        <div className={style.content__s}>
          <div className={style.content__items}>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content?.details?.p }}
            ></div>
            <div
              dangerouslySetInnerHTML={{ __html: data?.content?.details?.p2 }}
            ></div>
          </div>
          <div className={style.content__link}>
            <Link
              target="_blank"
              href={data?.content?.details?.link?.url}
              className={style.link_card}
            >
              {data?.content?.details?.link?.title}
            </Link>
            <i
              style={{ color: "var(--bg-primary)" }}
              className="fa-solid fa-arrow-right"
            ></i>
          </div>
        </div>

        <div className={style.content__s}>
          <div className={style.content__list__title}>
            <h4>{data?.content?.technology?.title}</h4>
          </div>

          <div className={style.content__list}>
            {data?.content?.technology?.items.map((tech) => {
              return (
                <>
                  <div className={style.content__list__wrap}>
                    <div className={style.content__list__img}>
                      <LazyLoadImage effect="blur" src={tech.logo} alt="" />
                    </div>
                    <div className={style.content__list__item}>
                      <p>{tech?.title}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
