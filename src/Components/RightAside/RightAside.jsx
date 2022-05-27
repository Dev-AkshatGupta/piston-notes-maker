import React, { useEffect } from "react";
import "./RightAside.css";
import { useSelector } from "react-redux";

function RightAside() {

  return (
    <div className="layout__right-sidebar-container">
      <div className="layout__right-sidebar">
        <header className="layout__right-sidebar-container-head">
          <div className="nav-bottom-search-box">
            <input
              type="text"
              className="nav-bottom-search"
              placeholder=" search"
            />
          </div>
        </header>
        <div className="trends-for-you">
          <div className="trends-for-you__block">
            <div className="trends-for-you__heading">Trends for you</div>
          </div>

          <div className="trends-for-you__block">
            <div className="trends-for-you__meta-information">
              Trending in Germany
            </div>
            <div className="trends-for-you__trend-name">#AmazonPrimeDay</div>
          </div>
          <div className="trends-for-you__block">
            <div className="trends-for-you__meta-information">
              Trending - Trending
            </div>
            <div className="trends-for-you__trend-name">#autos</div>
            <div className="trends-for-you__meta-information">2,800 Tweets</div>
          </div>
        </div>
        <div className="who-to-follow">
          <div className="who-to-follow__block">
            <div className="who-to-follow__heading">Who to follow</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RightAside };
