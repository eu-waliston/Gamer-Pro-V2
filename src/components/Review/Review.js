import React from "react";

const Review = () => {
  return (
    <>
      <section id="reviews">
        <div class="title">
          <div class="container">
            <h2>
              <i class="fas fa-comments"></i> Featured Reviwes
            </h2>
          </div>
        </div>

        <div class="container">
          <article>
            <div class="item-img">
              <img
                src={require("../resources/images/review-1.jpg")}
                alt="News"
              />
              <span>
                <i class="fas fa-star"></i>
                10
              </span>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">Review</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore obcaecati impedit dicta exercitationem unde id?
              </p>
              <div class="date">Review | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img
                src={require("../resources/images/review-2.jpg")}
                alt="News"
              />
              <span>
                <i class="fas fa-star"></i>
                10
              </span>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">Review</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore obcaecati impedit dicta exercitationem unde id?
              </p>
              <div class="date">Review | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img
                src={require("../resources/images/review-3.jpg")}
                alt="News"
              />
              <span>
                <i class="fas fa-star"></i>
                10
              </span>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">Review</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore obcaecati impedit dicta exercitationem unde id?
              </p>
              <div class="date">Review | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img
                src={require("../resources/images/review-4.jpg")}
                alt="News"
              />
              <span>
                <i class="fas fa-star"></i>
                10
              </span>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">Review</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore obcaecati impedit dicta exercitationem unde id?
              </p>
              <div class="date">Review | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img
                src={require("../resources/images/review-5.jpg")}
                alt="News"
              />
              <span>
                <i class="fas fa-star"></i>
                10
              </span>
            </div>
            <div class="item-text">
              <a href="#" class="h1">
                <span class="category">Review</span> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore obcaecati impedit dicta exercitationem unde id?
              </p>
              <div class="date">Review | Trending | 11:00 AM</div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Review;
