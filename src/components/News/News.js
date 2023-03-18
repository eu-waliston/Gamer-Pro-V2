import React from "react";
import "./News.css";

const News = () => {
  return (
    <>
      <section id="news">
        <div class="title">
          <div class="container">
            <h2>
              <i class="fas fa-rss"></i> News
            </h2>
          </div>
        </div>

        <div class="container">
          <div class="news-latest">
            <h3>Latest News</h3>

            <article>
              <div class="item-img">
                <img
                  src={require("../resources/images/news-1.jpg")}
                  alt="News"
                />
                <span>
                  <i class="fas fa-comment"></i>
                  10
                </span>
              </div>
              <div class="item-text">
                <a href="#" class="h1">
                  <span class="category">latest</span> Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore obcaecati impedit dicta exercitationem unde id?
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img
                  src={require("../resources/images/news-2.jpg")}
                  alt="News"
                />
                <span>
                  <i class="fas fa-comment"></i>
                  10
                </span>
              </div>
              <div class="item-text">
                <a href="#" class="h1">
                  <span class="category">latest</span> Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore obcaecati impedit dicta exercitationem unde id?
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img
                  src={require("../resources/images/news-3.jpg")}
                  alt="News"
                />
                <span>
                  <i class="fas fa-comment"></i>
                  10
                </span>
              </div>
              <div class="item-text">
                <a href="#" class="h1">
                  <span class="category">latest</span> Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore obcaecati impedit dicta exercitationem unde id?
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img
                  src={require("../resources/images/news-4.jpg")}
                  alt="News"
                />
                <span>
                  <i class="fas fa-comment"></i>
                  10
                </span>
              </div>
              <div class="item-text">
                <a href="#" class="h1">
                  <span class="category">latest</span> Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore obcaecati impedit dicta exercitationem unde id?
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img
                  src={require("../resources/images/news-5.jpg")}
                  alt="News"
                />
                <span>
                  <i class="fas fa-comment"></i>
                  10
                </span>
              </div>
              <div class="item-text">
                <a href="#" class="h1">
                  <span class="category">latest</span> Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore obcaecati impedit dicta exercitationem unde id?
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>
          </div>

          <div class="news-popular">
            <h3>Popular News</h3>
            <div class="popular-list">
              <article>
                <div class="item-img">
                  <img
                    src={require("../resources/images/news-6.jpg")}
                    alt="news"
                  />
                </div>
                <div class="item-text">
                  <a href="#" class="h1">
                    <span class="category">popular</span>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Quaeris ut.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img
                    src={require("../resources/images/news-7.jpg")}
                    alt="news"
                  />
                </div>
                <div class="item-text">
                  <a href="#" class="h1">
                    <span class="category">popular</span>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Quaerattur ut.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img
                    src={require("../resources/images/news-8.jpg")}
                    alt="news"
                  />
                </div>
                <div class="item-text">
                  <a href="#" class="h1">
                    <span class="category">popular</span>Lorem adipisicing elit.
                    Quaerat error maiores nihil aut a coomnis ut.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img
                    src={require("../resources/images/news-9.jpg")}
                    alt="news"
                  />
                </div>
                <div class="item-text">
                  <a href="#" class="h1">
                    <span class="category">popular</span>Lorem ipsipisicing
                    elit. Quaerat error meptam omnis ut.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img
                    src={require("../resources/images/news-10.jpg")}
                    alt="news"
                  />
                </div>
                <div class="item-text">
                  <a href="#" class="h1">
                    <span class="category">popular</span>Lorem ipsum dolor sit,
                    amet cog elit. Quaeratpturi eius aperiam omnis ut.
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
