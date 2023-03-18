import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <>
      <section id="videos">
        <div class="title">
          <div class="container">
            <h2>
              <i class="fas fa-video"></i> Videos & Trailers
            </h2>
          </div>
        </div>

        <div class="container">
          <article>
            <div class="item-video">
              <video controls poster="resources/videos/video-1-poster.webp">
                <source
                  src={require("../resources/videos/video-1.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">trailer</span> Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Exercitationem dolores iste
                vel.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                eligendi suscipit sit.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video
                controls
                poster={require("../resources/videos/video-2-poster.webp")}
              >
                <source
                  src={require("../resources/videos/video-2.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">trailer</span> Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Exercitationem dolores iste
                vel.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                eligendi suscipit sit.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video
                controls
                poster={require("../resources/videos/video-3-poster.webp")}
              >
                <source
                  src={require("../resources/videos/video-3.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">trailer</span> Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Exercitationem dolores iste
                vel.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                eligendi suscipit sit.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video
                controls
                poster={require("../resources/videos/video-4-poster.webp")}
              >
                <source
                  src={require("../resources/videos/video-4.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">trailer</span> Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Exercitationem dolores iste
                vel.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                eligendi suscipit sit.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Video;
