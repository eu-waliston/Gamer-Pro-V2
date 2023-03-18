import React from "react";
import "./Promo.css";

const Promo = () => {
  return (
    <>
      <section id="promo" class="flex">
        <div class="container">
          <span>Join the battle</span>
          <h2>Fortnight Battle Royale</h2>
          <p class="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            ducimus alias sit iste itaque doloribus.
          </p>
          <div class="btn-groups flex">
            <a href="#">
              <i class="fas fa-play"></i> watch trailer
            </a>
            <a href="#">
              <i class="fas fa-gamepad"></i> play free now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
