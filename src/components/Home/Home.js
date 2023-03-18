import React from "react";
import "./Home.css"

const Home = () => {
    return (

        <header id="header">
          <div class="container">
            <div class="header-content">


              <div class="header-item">
                <img src={require("../resources/images/banner-img-1.jpg")} alt="banner-img-1" />
                <div class="header-item-text">
                  <h2>PLAY THE ULTIMATE EDITION NOW!</h2>
                  <p class="text">
                    Experinece the complete story from the beginning to the End!
                    Minecraft Dungeons: Ultimate Edition
                    includes the base game and all six DLCs.
                  </p>
                  <div>
                    <small>By John Doe</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>

              <div class="header-item">
                <img  alt="banner-img-1" src={require("../resources/images/banner-img-2.jpg")}  />
                <div class="header-item-text">
                  <h2>PUBG: New State (mobile) crosses milion pre-registrations</h2>
                  <p class="text">
                    Kraftson is gearing up to lauch its second battle royale mobile
                    game after Battlegrounds Mobile India called PUBG: New Statr. The game will follow the same battle roylae
                    bluepoints as previous titles
                  </p>
                  <div>
                    <small>By John Doe</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>

              <div class="header-item">
                <img src={require("../resources/images/banner-img-3.jpg")} alt="banner-img-1" />
                <div class="header-item-text">
                  <h2>Apex Legends Evolution Collection Events</h2>
                  <p class="text">
                    Learn what a Legend can become in the Apex Legends Evolution Collection Event
                  </p>
                  <div>
                    <small>By John Doe</small>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

    )
}

export default Home;