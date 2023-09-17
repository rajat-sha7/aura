import React from 'react'
import style from "./Service.module.css"
import "../../globals.css"

export default function Service() {
  return (
    <div className={`${style.service_box} container`}>
      <div className={style.service_section}>
        <div className={style.service_heading}>
          <h1 className={style.service_title}>Service</h1>
          <p className={style.service_subtitle}>
            Aura was designed to bridge a language divide that exists
            between the world of business leaders, educators, founders,
            designers and lawyers. We provide personalised advice, strategies,
            people and solutions.
          </p>
        </div>

        <div className={style.inner_servicetext1}>
          <h2>H2 HEADING TAG</h2>
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
        <div className={style.inner_servicetext2}>
          <h2>H2 HEADING TAG</h2>
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
        <div className={style.inner_servicetext3}>
          <h2>H2 HEADING TAG</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  )
}
