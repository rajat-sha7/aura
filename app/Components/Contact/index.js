import React, { useState } from "react";
import style from "../Contact/Contact.module.css";
import "../../../app/globals.css";
import Script from "next/script";
import "./contact.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from "next/router";

<Script>
  <script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="//js.hs-scripts.com/41296670.js"
  ></script>
</Script>;

export default function index() {
  const Router = useRouter();
  const [inputFields, setInputFields] = useState({
    firstname: "",
    email: "",
    message: "",
  });
  const [value, setValue] = useState();
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const validateValues = () => {
    let errors = {};
    if (!inputFields.firstname.trim()) {
      errors.name = "Name field is required";
    }
    if (!inputFields.email.trim()) {
      errors.email = "Email field is required";
    }
    if (!inputFields.message.trim()) {
      errors.message = "Message field is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateValues();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);

      const hubspotPortalId = "41296670";
      const hubspotFormGuid = "5f33b3cb-d1bb-4c45-983c-a405e36e2734";
      const URL = `https://api.hsforms.com/submissions/v3/integration/submit/${hubspotPortalId}/${hubspotFormGuid}`;

      const payload = {
        fields: [
          {
            name: "firstname",
            value: inputFields.firstname,
          },
          {
            name: "email",
            value: inputFields.email,
          },
          {
            name: "mobilephone",
            value: value,
          },
          {
            name: "message",
            value: inputFields.message,
          },
        ],
      };

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form data sent to HubSpot:", data);
          setSubmitting(false);
          setInputFields({
            firstname: "",
            email: "",
            message: "",
          });
          setValue("");
        })
        .catch((error) => {
          console.error("Error submitting form to HubSpot:", error);
          alert("Error submitting form. Please try again later.");
          setSubmitting(false);
        });
    }
    setTimeout(() => {
      Router.push("/thanks");
    }, 2000);
  };

  return (
    <div className={`${style.contact_page}`}>
      <div className={style.error_field}></div>
      <div className={`${style.contact_box} container`}>
        <div className={style.contact_text}>
          <h1>Contact Us Today</h1>
          <h3>
            Aura was created to bridge the language divide that exists
            between the tech world and the not-so-tech world.
          </h3>

          <LazyLoadImage
            effect="blur"
            className={style.contact_img}
            src="/contact.png"
            alt="contact_img"
          ></LazyLoadImage>
        </div>

        <div className={style.contact_form}>
          <form
            className={style.form__box}
            onSubmit={handleSubmit}
            method="POST"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={style.input__div}>
              <input
                className={style.inputs}
                type="text"
                name="firstname"
                id="name"
                placeholder="Your Name"
                value={inputFields.firstname}
                onChange={handleChange}
              />
              {errors.name ? (
                <p className={style.error}>Name field is required*</p>
              ) : null}
            </div>
            <div className={style.input__div}>
              <input
                className={style.inputs}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email*"
                value={inputFields.email}
                onChange={handleChange}
              />
              {errors.email ? (
                <p className={style.error}>Email field is required*</p>
              ) : null}
            </div>
            <div className={style.input__div}>
              <PhoneInput
                className={style.inputs}
                country={"au"}
                value={value}
                id="phone"
                onChange={setValue}
                inputProps={{
                  name: "Enter Your Phone number here...",
                  required: true,
                }}
              />
            </div>
            <div className={style.input__div}>
              <textarea
                className={style.inputs}
                type="text"
                rows="7"
                name="message"
                id="message"
                placeholder="Message"
                value={inputFields.message}
                onChange={handleChange}
              />
              {errors.message ? (
                <p className={style.error}>Message field is required</p>
              ) : null}
            </div>
            <span>
              <button type="submit" className="button">
                Send
              </button>
              {Object.keys(errors).length === 0 && submitting ? (
                <span className={style.success}>Successfully submitted ✓</span>
              ) : null}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
