import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="plans__header">
        <span>READY TO START</span>

        <span>YOUR JOURNEY</span>

        <span>NOW WITHUS</span>
      </div>

      <div className="plans__cards">
        {plansData.map((plan, i) => (
          <div className="plans__card">
            {plan.icon}

            <span>{plan.name}</span>

            <span>$ {plan.price}</span>

            <div className="plans__features">
              {plan.features.map((feature, i) => (
                <div className="plans__feature">
                  <img src={whiteTick} alt="whiteTick" />

                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -</span>
            </div>

            <button>Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
