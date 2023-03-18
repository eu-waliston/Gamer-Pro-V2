import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div class="navbar">
      <div class="container flex">
        <a href="#" class="navbar-brand">
        Gamer<span>Pro</span>
        </a>

        <div class="navbar-collapse">
          <button type="button" class="navbar-toggler-close">
            <i class="fas fa-times"></i>
          </button>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                home
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                games
              </a>

              <span class="nav-item-dropdown">
                <i class="fas fa-chevron-down"></i>
              </span>
              <ul class="nav-item-dropdown-content">
                <li>
                  <a href="#">PS4</a>
                </li>
                <li>
                  <a href="#">Xbox</a>
                </li>
                <li>
                  <a href="#">PUBG</a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                news
              </a>

              <span class="nav-item-dropdown">
                <i class="fas fa-chevron-down"></i>
              </span>
              <ul class="nav-item-dropdown-content">
                <li>
                  <a href="#">Latest</a>
                </li>
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Archive</a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                reviews
              </a>

              <span class="nav-item-dropdown">
                <i class="fas fa-chevron-down"></i>
              </span>
              <ul class="nav-item-dropdown-content">
                <li>
                  <a href="#">Entertainment</a>
                </li>
                <li>
                  <a href="#">Games</a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                videos
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                gear
              </a>

              <span class="nav-item-dropdown">
                <i class="fas fa-chevron-down"></i>
              </span>
              <ul class="nav-item-dropdown-content">
                <li>
                  <a href="#">Gaming PC</a>
                </li>
                <li>
                  <a href="#">Gaming Chair</a>
                </li>
                <li>
                  <a href="#">Gaming Desk</a>
                </li>
                <li>
                  <a href="#">Gaming Accessories</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="nav-icons-group">
          <form class="search-form">
            <div class="search-icon-group">
              <input type="search" class="search-control" />
              <button type="submit" class="search-icon">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </form>
          <button type="button" class="navbar-toggler-open">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
