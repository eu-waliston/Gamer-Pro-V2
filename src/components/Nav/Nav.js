import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div class="navbar">
      <div class="container flex">
        <a href=" " class="navbar-brand">
        Gamer<span>Pro</span>
        </a>

        <div class="navbar-collapse">

          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#header" class="nav-link">
                home
              </a>
            </li>

            <li class="nav-item">
              <a href="#promo" class="nav-link">
                games
              </a>
            </li>

            <li class="nav-item">
              <a href="#news" class="nav-link">
                news
              </a>
            </li>

            <li class="nav-item">
              <a href="#reviews" class="nav-link">
                reviews
              </a>
            </li>

            <li class="nav-item">
              <a href="#videos" class="nav-link">
                videos
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Nav;
