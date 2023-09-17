import style from "@/app/Components/CaseStudy/Tags/tags.module.scss";
import Link from "next/link";

export default function TagList({ data }) {
  const handleClick = (e) => {
    const Target = e.target.getAttribute("href").slice(1);

    const otherPageComponent = document.getElementById(Target);
    otherPageComponent?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`${style.tag} container`}>
      <div className={style.tag__wrap}>
        <div className={style.tag__title}>
          <h1>{data?.title}</h1>
        </div>
        {/* <div className={style.tag__menu}>
          <ul className={style.tag__items}>
            <li className="">
              <span onClick={handleClick} href="#graphic">
                {" "}
                Graphics
              </span>
            </li>
            <li className="">
              <span onClick={handleClick} href="#project">
                {" "}
                Project management{" "}
              </span>
            </li>
            <li className="">
              <span onClick={handleClick} href="#systemDesign">
                {" "}
                System design{" "}
              </span>
            </li>
            <li className="">
              <span onClick={handleClick} href="#uxDesign">
                {" "}
                UX design{" "}
              </span>
            </li>
            <li className="">
              <span onClick={handleClick} href="#web">
                {" "}
                Web development{" "}
              </span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
    //  {data.tabs.tablist.map((tab) => tab.id)}
  );
}
