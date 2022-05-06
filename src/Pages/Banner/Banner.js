import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div class="container banner-bg my-5">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="https://i.ibb.co/r23xFhw/Softline-Madison-Sofa-Bed-620-nest-co-uk-1.png" alt=""  className=" img-fluid"/>
              </div>
              <div className="col-md-6">
                <h1>Modern Sofa</h1>
                <p>This beautiful sofa is tremendously comfy. <br /> This modern sofa perfect for  snuggling up in front of the TV or fireplace</p>
                <button className="banner-btn my-2">Learn More</button>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="https://i.ibb.co/2NZ4FSJ/skagerak-jut-cabinet-green-marble.png"
                  className=" img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <h1>Jut Cabinet</h1>
                <p>
                 <small>The cabinet is ideal for numerous locations and uses around the home; <br /> in the bedroom to house clothing or placed in the living room or dining room</small>

                </p>
                <button className="banner-btn my-2">Learn More</button>

              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img src="https://i.ibb.co/2S3X9cj/skagerak-maissi-bench-main.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h1>Maissi Bench</h1>
                <p>
                Use it in a hallway, living room or bedroom, the bench creates a <br /> useful seating solution wherever it is placed.
                </p>
                <button className="banner-btn my-2">Learn More</button>

              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
