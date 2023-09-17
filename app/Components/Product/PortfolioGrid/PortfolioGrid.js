import React, { useEffect, useState } from "react";
import "../../../globals.css";
import style from "./PortfolioGrid.module.css";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PortfolioGrid({ data, category }) {
  const [list, setList] = useState(data.clients);

  useEffect(() => {
    if (category === "All") {
      setList(data.clients);
    } else {
      const filteredData = data.clients.filter((item) => {
        return item.category === category;
      });
      setList(filteredData);
    }
  }, [category]);

  return (
    <>
      <div className={`${style.product__grid} container_fluid`}>
        <div className={`${style.product__gridbox} container`}>
          <div className={style.cards}>
            {list &&
              list?.map((data, index) => (
                <div className={style.card} key={index}>
                  <div className={style.card__img}>
                    <LazyLoadImage
                      effect="blur"
                      placeholderSrc={data.image2}
                      src={data.image}
                      alt="product1"
                    />
                  </div>

                  <div className={style.card_text}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <span className={style.link_box}>
                      <Link
                        href={`/portfolio/${data.slug}`}
                        className={style.card_link}
                      >
                        <div className={style.link_span}>
                          {data?.link?.title}
                        </div>
                      </Link>
                      <i style={{ color: "var(--bg-primary)" }} 
                        className="fa-solid fa-arrow-right" ></i>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
