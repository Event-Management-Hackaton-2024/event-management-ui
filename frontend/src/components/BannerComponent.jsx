import React from "react";

const BannerComponent = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-5 mb-5">
          <div className="home-div">
            <h2>Никога не пропускай връзка</h2>
            <p>
              Отбележете се и вижте, кои присъства на най-популярните събития, без да изпускате
              възможността да се свържете директно с подходящите хора..
            </p>
          </div>
        </div>
        <div className="col-md-2"></div> {/* Empty column for gap */}
        <div className="col-md-5 mb-5">
          <div className="home-div">
            <h2>Бъди там за другите и те ще бъдат тук за теб.</h2>
            <p>
              Стани част от общността! Попълни профила си точно и ще откриеш хора, които са готови
              да ти помогнат, както и тези, на които ти можеш да помогнеш. Твоите знания са ценни!
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <img
            src="https://www.pinayads.com/wp-content/uploads/2019/11/TikTok-Trends-Event-in-HCMC-Vietnam.jpg"
            alt="Large Placeholder"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
