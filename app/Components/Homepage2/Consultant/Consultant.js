import React, { useState } from "react";
import style from "./Consultant.module.css";
import "../../../globals.css";
import Script from "next/script";

<Script>
  <script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="//js.hs-scripts.com/41296670.js"
  ></script>
</Script>;

const Consultant = () => {
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [inputFields, setInputFields] = useState({
    firstname: "",
    email: "",
  });

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
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateValues();

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);


      

      const hubspotPortalId = "41296670";
      const hubspotFormGuid = "20613908-1e01-4161-9d37-1d8c6966292a";

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
          // alert("Form submitted successfully!");
          setTimeout(() => {
            setSubmitting(false);
            setInputFields({
              firstname: "",
              email: "",
            });
          }, 1000);
        })
        .catch((error) => {
          console.error("Error submitting form to HubSpot:", error);
          alert("Error submitting form. Please try again later.");
          setSubmitting(false);
        });
    }
  };

  return (
    <div className={`${style.consult_div} container`}>
      <div className={`${style.consultant_container}`}>
        <div className={style.consultant_text}>
          <div className={style.consultant_heading}>
            <h4>
              WE HAVE YEARS OF EXPERIENCE MAPPING COMPLEX PROJECTS. TALK TO US
              EARLY TO GET CLARITY ON YOUR OPTIONS.
            </h4>
          </div>
          <form
            onSubmit={handleSubmit}
            method="POST"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={style.consultant_inputs}>
              <div className={style.input_div}>
                <input
                  className={style.inputs}
                  type="text"
                  name="firstname"
                  id="name"
                  placeholder="Enter name"
                  value={inputFields.firstname}
                  onChange={handleChange}
                />
                {errors.name ? (
                  <p className={style.error}>Name field is required*</p>
                ) : null}
              </div>
              <div className={style.input_div}>
                <input
                  className={style.inputs}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  value={inputFields.email}
                  onChange={handleChange}
                />
                {errors.email ? (
                  <p className={style.error}>email field is required*</p>
                ) : null}
              </div>
            </div>
            <div className={style.parabox}>
              {" "}
              {Object.keys(errors).length === 0 && submitting ? (
                <p className={style.success}>Form submitted successfully.</p>
              ) : null}
            </div>

            <button type="submit" className={`${style.callback_block} button`}>
              Get a callback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultant;
