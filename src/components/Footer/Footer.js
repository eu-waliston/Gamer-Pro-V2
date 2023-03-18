import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="footer-links-1">
            <h2>Join GamerPro: </h2>
            <ul class="flex">
              <li>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fab fa-twitch"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-links-2">
            <ul class="flex">
              <li>
                <a href="#"> About GamerPro</a>
              </li>

              <li>
                <a href="#">Adrtise</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>

          <p class="text">
            &copy; <a href="#">GamerPro</a>. All Rigths Reserverd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
