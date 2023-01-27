import React from "react";
import Header from "./Header";
import heroImage from "../assets/hero_image.png";
import heroImageBack from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur"></div>

      <div className="hero__left">
        <Header />

        <div className="hero__ad">
          <motion.div
            initial={{ left: mobile ? "138px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>The best fitness club in the city</span>
        </div>

        <div className="hero__text">
          <div>
            <span className="stroke">Shape</span>

            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="hero__figures">
          <div className="">
            <span>
              <NumberCounter
                end={140}
                start={100}
                delay={4}
                preFix="+"
              ></NumberCounter>
            </span>

            <span>EXPERT COACHES</span>
          </div>

          <div className="">
            <span>
              <NumberCounter
                end={978}
                start={800}
                delay={4}
                preFix="+"
              ></NumberCounter>
            </span>

            <span>MEMBERS JOINED</span>
          </div>

          <div className="">
            <span>
              <NumberCounter
                end={50}
                start={0}
                delay={1.5}
                preFix="+"
              ></NumberCounter>
            </span>

            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        <div className="hero__button">
          <button>Get Started</button>

          <button>Learn More</button>
        </div>
      </div>

      <div className="hero__right">
        <button>Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="hero__heartRate"
        >
          <img src={Heart} alt="heart" />

          <span>Heart Rate</span>

          <span>116 bpm</span>
        </motion.div>

        <img src={heroImage} alt="heroImage" className="hero__image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={heroImageBack}
          alt="heroImageBack"
          className="hero__imageBack"
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="hero__calories"
        >
          <img src={Calories} alt="calories" />

          <div>
            <span>Calories Burned</span>

            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
