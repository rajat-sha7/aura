import React from "react";
import style from "./Policy.module.css";
import "../../globals.css";

export default function Policy() {
  return (
    <div className={`${style.policy_box} container`}>
      <div className={style.policy_section}>
        <div className={style.policy_heading}>
          <h1 className={style.policy_title}>Privacy Policies</h1>
          <p className={style.policy_subtitle}>
            Aura was designed to bridge a language divide that exists
            between the world of business leaders, educators, founders,
            designers and lawyers. We provide personalised advice, strategies,
            people and solutions.
          </p>
        </div>

        <div className={style.inner_policytext1}>
          <h2>Personal Identification Information</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={style.inner_policytext2}>
          <h2>Non-personal Identification Information</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={style.inner_policytext3}>
          <h2>Web Browser Cookies</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={style.inner_policytext4}>
          <h2>How we use Collected Information</h2>
          <p>
            Aura may collect and use users personal information for the
            following purposes:
          </p>
          <ul>
            <li>
              <h3>
                Aura may collect and use users personal information for the
                following purposes:
              </h3>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </li>
          </ul>
        </div>
        <div className={style.inner_policytext5}>
          <h2>Sharing Your Personal Information</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={style.inner_policytext6}>
          <h2>Changes to this Privacy Policy</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className={style.inner_policytext7}>
          <h2>Your acceptance of these terms</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}
