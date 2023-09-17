import React from "react";
import style from "./Blogs.module.scss";
import "../../globals.css";
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Blog({ data }) {
  return (
    <div className={`${style.blogs} container`}>
      <div className={style.blogs__heading}>
        <h1 className={style.blog__title}>{data?.title}</h1>
      </div>
      <div className={style.blogs__wrap}>
        {data?.blog &&
          data.blog.map((data, index) => (
            <div className={style.blogs__wrap__card} key={index}>
              <div className={style.card__img}>
                <LazyLoadImage
                    effect="blur" src={data.image} alt="img"/>
              </div>
              <div className={style.card__text}>
                <Link href={`blog/${data.slug}`}>{data.description}</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
