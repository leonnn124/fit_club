import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c5fho32",
        "template_dszh1vl",
        form.current,
        "eNCHwuuN4ByGby963"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join">
      <div className="join__left">
        <hr />

        <div>
          <span>READY TO</span>

          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>

          <span>WITH US?</span>
        </div>
      </div>

      <div className="join__right">
        <form ref={form} action="" className="join__form" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />

          <button>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
